const axios = require("axios");
const token = require('.token.js');

const api = {
    getUser(username) {
        const headers = {headers:
        {Authorization: `token ${token}`}}
        const queryUrl = `https://api.github.com/users/${username}`;
        
        return axios.get(queryUrl, headers).then( res => {
            return {
                avatar: res.data.avatar_url,
                email : res.data.email,
            }
        })
    }
  };
  
  module.exports = api;
  