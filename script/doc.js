const doc = (info, queryColor) => {
    return `# <span style= "color: ${queryColor}">${info.name}</span>  
![profile picture](${info.avatar_url})   
Bio:${info.bio}  
User Url: ${info.url}  
Repos: ${info.url}  
Followers: ${info.followers}  
Following: ${info.following}  
Location: ${info.location}  `;
}

module.exports = doc