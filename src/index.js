const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const CityRepository = require('./repository/city-repository');
const{Airport,City} = require('./models/index');
const db = require('./models/index');

const setupAndstartServer = async()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    const PORT = 6000;
    app.use('/api',ApiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Server is working on port ${PORT}`);
      
       if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true});
       }
    });
}

setupAndstartServer();