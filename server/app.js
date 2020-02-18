const chalk = require("chalk");
const yargs = require("yargs");
const express = require("express");
const app = express();
var request = require("request");
var bodyParser = require("body-parser");
var md5 = require("md5");
var crypto = require("crypto");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  return new Promise((resolve, reject) => {
    request(
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        uri:
          "https://contegris1.od2.vtiger.com/webservice.php?operation=getchallenge&username=hamza.mazhar@grp.contegris.com",
        method: "GET"
      },
      function(error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            console.log("response here", response.body);
            let obj = JSON.parse(response.body);
            console.log("==========>", obj.result.token);
            let accessToken = md5(obj.result.token + "4hkQdOqlu8pySVAW");
            var hash = crypto
              .createHash("md5")
              .update(obj.result.token + "4hkQdOqlu8pySVAW")
              .digest("hex");

            console.log("complete token is", accessToken);
            console.log("---------new hash", hash);
            var data = {
              data: {
                username: "hamza.mazhar@grp.contegris.com",
                operation: "login",
                accessKey: accessToken
              }
            };
            var Data = JSON.stringify(data);
            request(
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                uri: `https://contegris1.od2.vtiger.com/webservice.php`,
                // body: Data,
                form: {
                  username: "hamza.mazhar@grp.contegris.com",
                  operation: "login",
                  accessKey: accessToken
                },
                method: "POST"
              },
              function(errr, resp) {
                try {
                  console.log("---------", resp.body);
                  res.send(JSON.parse(resp.body));
                } catch (error) {
                  console.log("erere", error);
                }
              }
            );
          }
          resolve(response.body);
        } catch (err) {
          console.log("here getting err", err);
        }
      }
    );
  });
});

app.listen(8080, function() {
  console.log("Server started on port 8080");
});
