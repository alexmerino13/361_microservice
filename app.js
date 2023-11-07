const express = require("express");
const path = require("path");
const app = express();
var http = require('http');
const fs = require('fs');
const PORT=3923;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/cover_image", function (req, res) {
    const isbn = req.query.isbn;
    let req_url = "https://covers.openlibrary.org/b/isbn/" + isbn + ".json"
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", req_url, true);
    //xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 ){
            if(xhttp.responseText.includes("internal server error")){
                return res.status(500).send('ISBN not found.')
            }
            console.log(xhttp.responseText);
            let response = JSON.parse(xhttp.responseText);
            let file_name = response.filename;
            let image_url = response.source_url;
            let data = {
                file: file_name,
                url: image_url
            };
            return res.send(JSON.stringify(data));
        }
            
    }

    // Send the request and wait for the response
    xhttp.send();

});

app.listen(PORT, () => {
    console.log("Application started and Listening on http://localhost:" + PORT);
});
