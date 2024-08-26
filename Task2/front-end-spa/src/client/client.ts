export class Client {
    settings = require("../app-settings.json");

  
    getUserStatus =  async (username: string) => {
        const url = `http://localhost:${this.settings.port}/api/user/status?user=${username}`
        const response = await fetch(url, {
            method:"GET",
            credentials: 'include',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cookie': document.cookie
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            return data;
        });
        return response
    }

    postLogout = async () => {
        const url = `http://localhost:${this.settings.port}/api/logout`;
        return await this.post(url, undefined);
    }

    postOdds = async () => {
        const url = `http://localhost:${this.settings.port}/odds`;
        const body = JSON.stringify(
            {
                "url":this.settings.url
            }
        );
        return await this.post(url, body)
    }

    postLogin = async (username: string, password:string) => {
        const url = `http://localhost:${this.settings.port}/api/login`
        const body = JSON.stringify(
            {
                "username":username, 
                "password":password
            });
        return await this.post(url, body);
    }

    post = async (url:string, body: string | undefined)  => {
        const response =  fetch(url, {
            method:"POST",
            credentials: 'include',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cookie': document.cookie
            },
            body: body
        }).then((res) => {
            return res.json();
        }).then((data) => {
            return data;
        });
        return response
    }
}