const fetch = require('cross-fetch');

module.exports = async function (query, vars={}, AuthIsOptional=false) {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',   
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: vars
    })
  };
  
  let token = globalThis.token;
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  if (!token && !AuthIsOptional) {
    console.error('Error: Access Token Not Found.');return 'Error: Access Token Not Found.';
  }

  let {data, errors} = await (await fetch('https://graphql.anilist.co/', options)).json();
  if (errors) {
    errors.forEach(function(error){
      console.error(error)
    });
  }
  return data;
}