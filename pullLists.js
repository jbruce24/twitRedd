const twit = require('./twit');
const fs = require('fs');
const https = require('https');
const fetch = require('node-fetch');

const results = twit.get('lists/statuses',{slug:'Disney', owner_screen_name:'j_bruce24', count:10}, function(err,data,response){
  for(i=0;i<data.length;i++)
    {
    tweetData = data[i].id_str + ' ' + data[i].text + ' ' + data[i].user.name;
    //console.log();
    //consol
    /*var element = document.createElement("div");
    element.classList.add("tweets");
    element.textContent = tweetData;
    document.querySelector(".body").appendChild(element);*/
    document.getElementById('tweet').innerHTML  = tweetData;
    }
});
results;
