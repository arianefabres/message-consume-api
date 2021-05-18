const get = () => {
  return fetch('http://localhost:4001/messages', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then( (response) => {
    return response.json();
  })
  .catch( (error) => {
    console.log('Message error: ', error)
  });
}

export default get;