const twit = require('./twit');
const fs = require('fs');
const https = require('https');
const fetch = require('node-fetch');
const jbr24 = require("./jbruce24");

const results = twit.get('users/lookup', {screen_name:'j_bruce24'}, function(err, data, response){
 fs.writeFile('jbruce24.json', JSON.stringify(data, null, 2), err => {
   if (err) {
     //console.error(err)
     return
   }
 })
});

console.log(jbr24[0].name);
/*fs.writeFile('jbruce24.json', results, err => {
  if (err) {
    console.error(err)
    return
  }
})*/
