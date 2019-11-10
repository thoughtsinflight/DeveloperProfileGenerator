var inquirer = require("inquirer");
var axios = require("axios");
var fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What's your Github username?",
            name: "username"
        },
        {
            type: "list",
            message: "What color do you prefer?",
            choices: ["blue", "red", "yellow", "purple", "green"],
            name: "color"
        },
    ]).then(function (response) {
        var queryName = response.username;
        var queryColor = response.color;
        console.log(queryColor);
        console.log(queryName);
        axios
            .get("https://api.github.com/users/" + queryName)
            .then(function (res) {
                var info = res.data;
                console.log(info);
                fs.writeFile("profile.md", info.name, info.bio, info.url, info.public_repos, info.followers, info.following, info.location, function(err){
                    if (err) {
                        console.log(err);
                      }
                      else {
                        console.log("Commit logged!");
                      }
                });

            })

    })

