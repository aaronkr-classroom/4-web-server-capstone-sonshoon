"usins strict";

const { error } = require('console');
const fs =require  ('fs'),
    httpStatus =require("http-status-codes"),
    contentTypes=require("./content-types");

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`,(error,data)=>{
            if(error){
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end("there was an error servinf content");

            }
            res.end(data);
        });
    }
};