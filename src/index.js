const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('./config/serverConfig');


const setupAndstartServer = async()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    const PORT = 6000;
    app.listen(PORT,()=>{
        console.log(`Server is working on port ${PORT}`);
        console.log(process.env);
    });
}

setupAndstartServer();