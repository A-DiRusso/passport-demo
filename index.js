//First bring in dotenv
require('dotenv').config();
const PORT = process.env.PORT;
const session = require('express-session');
const express = require('express');
const app = express();
const FileStore = require('session-file-store')(session);
const setupAuth = require('./auth');
// const S3KRET = require('./config');

// tell express to use the session modules
app.use(session({
    store: new FileStore(),  // no options for now
    secret: process.env.SESSION_SECRET
}));

//only after we have set up sessions with express 
//is it okay to attach passport
//authentication
setupAuth(app);



app.get('/', (req, res) => {
    res.send(`
    <h1>Hello There</h1>
    `);
});




app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
