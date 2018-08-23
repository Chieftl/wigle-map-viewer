const apiEndpoing = 'https://api.wigle.net/api/v2/network';
const encodedToken = 'QUlEM2FhMmYyNjcwZDA1MmEzOTA0MjlhYzgxY2M3ZDYwMzE6ZGFiODE1MzZkZjI3ZDBjM2YxYzU1ZTBjNTcwNjZlNmI=';

export function search(paramsString) {
  return fetch(apiEndpoing + '/search?' + paramsString, {
    headers: {
      'Authorization': 'Basic ' + encodedToken,
    }
  })
    .then(function(response) {
      console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
      console.log(response.status); // 200
      return response.json();
     })
    .catch( alert );
}
