const fetch = require('cross-fetch');

async function FETCH(token, query) {
  var options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}` ,      
      'Content-Type': 'application/json',   
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query
    })
  };
  
  return await (await fetch('https://graphql.anilist.co/', options)).json()
}

module.exports = FETCH;