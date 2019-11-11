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
                var profile = (queryColor, info) => {
                    return `# <h1 style= ${queryColor}>${info.name}</h1>  
                    ${info.avatar_url}  
                    Bio:${info.bio}  
                    User Url: ${info.url}  
                    Repos: ${info.url}  
                    Followers: ${info.followers}  
                    Following: ${info.following}  
                    Location: ${info.location}  `
                }
                console.log(info);
                fs.writeFile("profile.md", JSON.stringify(profile), function(err){
                    if (err) {console.log(err);}
                    else {console.log("Commit logged!");}
                });

            })

    })

