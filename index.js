const express = require("express");
const formidable = require("formidable");
const httpMsgs = require("http-msgs");
const path = require("path");
const fs = require("fs");




const app = express();
app.listen(8000);

app.use(express.static(path.join(__dirname , "/static")));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");

});

app.post('/upload', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);//parse the req

    form.on('fileBegin', function (err, file){// begin
        file.path = __dirname + '/uploads/' + file.name;
        
    });


    form.on("error", function(error){//error
        httpMsgs.send500(req, res, error);
    });

    form.on('end', function (){//end the 
        httpMsgs.sendJSON(req, res, {
            Uploaded    : "file"
        });
    });

});

