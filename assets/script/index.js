var inquirer = require("inquirer");
var axios = require("axios");
var fs = require("fs");
const doc = require('./doc.js')
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
                // var profile = (queryColor, info) => {
                //     return `# <span style= ${queryColor}>${info.name}</span>  
                //     ${info.avatar_url}  
                //     Bio:${info.bio}  
                //     User Url: ${info.url}  
                //     Repos: ${info.url}  
                //     Followers: ${info.followers}  
                //     Following: ${info.following}  
                //     Location: ${info.location}  `;
                // }
                const saved = doc(info, queryColor)
                console.log(info);
                fs.writeFile(response.username+".md", saved, function(err){
                    if (err) {console.log(err);}
                    else {console.log("Commit logged!");}
                });

            })

    })

