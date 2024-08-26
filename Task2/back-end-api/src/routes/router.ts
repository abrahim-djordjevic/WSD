// src/index.ts
import express from 'express';
import { OddsController } from '../controllers/oddsController'
import { UserController } from '../controllers/userControler';
import '../middleware/server'

const router = express.Router();

router.post("/odds", (req, res) => {
    const { url } = req.body;
    const controller: OddsController = new OddsController();
    if(url) {
        if(req.session.authenticated){
            controller.getRaceData(url).then(() => {
                if(controller.race.race !== undefined){
                    res.status(200).json(controller.race);
                } else {
                    res.status(500).json({msg: '500 - Internal Server Erro'});
                }
            })
        } else {
            res.status(403).json({msg: '403 - Unauthorized User'});
        }
    } else {
        res.status(403).json('403 - No URL Provided');
    }
});

router.get("/api/user/status", (req, res) => {
    const username = req.query.user;
    if(username) {
        if(req.session.authenticated && req.session.user === username) {
            res.status(200).json(req.session)
        } else {
            res.status(403).json({msg: '403 - Unauthorized User'})
        }
    } else {
        res.status(403).json({msg: '403 - No User Provided'})
    }

})

router.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        if(req.session.authenticated) {
            res.status(200).json(req.session)
        } else {
            if(await new UserController(username, password).login()) {
                req.session.authenticated = true;
                req.session.user = username;
                res.status(200).json(req.session)
            } else {
                res.status(401).json({msg: '403 - Invalid Credientials'})
            }
        }
    } else {
        console.log("test");
        res.status(401).json({msg: '403 - Invalid Credientials'})
    }
});

router.post("/api/logout", async (req, res) => {
    if(req.session.authenticated) {
        req.session.authenticated = false;
        req.session.user = undefined;
        res.status(200).json(req.session)
    }
});

module.exports = router;