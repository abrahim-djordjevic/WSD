import express from 'express';
import session from 'express-session';

const settings = require("../app-settings.json");
const app = express();
const cors = require('cors');
const port = settings.port;
const router = require("./routes/router");
const SQLiteStore = require('connect-sqlite3')(session);

const SQLiteOptions = {
  db: settings.db
}

// needed to get json from request body
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
  secret: settings.secret,
  cookie: { maxAge: (300 * 2 * 1000)}, // set max age to 10 minutes
  saveUninitialized: false,
  store: new SQLiteStore(SQLiteOptions)
}));
// only allow localhost
app.use(cors({
  origin: settings.origin,
  allowedHeaders: "Origin, X-Requested-With, Access-Control-Max-Age, Content-Type, Accept, x-cron-token, x-path",
  methods: "GET, POST, OPTIONS, DELETE, PUT",
  credentials: true
}));

app.use('/', router);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});