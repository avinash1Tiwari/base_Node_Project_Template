const express = require('express');
const {serverConfig , Logger} = require('./config');

const apiRoutes = require('./routes')            // no need to provide complete path , ./routes/index.js

let app = express();

app.use('/api' , apiRoutes);

app.listen(serverConfig.port,()=>{

    console.log(`Successfully started the server on port =>  : ${serverConfig.port}`);
    // Logger.info("Successfully started the server bhai",{msg :"something"})

});