export default function handleResponseFromAPI(promise) {
  return promise.then((response) => {
    // eslint-disable-next-line no-unused-vars
    const res = response;
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  }).catch((error) => {
    // eslint-disable-next-line no-unused-vars
    const errMessage = error;
    return new Error();
  });
}
