const twit = require('twit');

const T = new twit({
  consumer_key: 'GVjDTyoYLdDKypMJ2xq0Ziqfi',
  consumer_secret: 'yZim4BeGQqX68La7VNcfvi3ueQkipLBcTGRgScDAJqbTn2xxfN',
  access_token: '937890619-rTmCw2mLnezpicR644HljrGqwFU3PEyxBWBnaqrQ',
  access_token_secret: 'KSvIXl453jd6UT0l0FLgdKlOJcFZsXpczYOKVx0R5GV2I',
});

/*T.get('users/lookup', {screen_name:'j_bruce24'}, function(err, data, response){
 console.log(data)
})*/  //this API Call gets data from twitter

module.exports = T;
