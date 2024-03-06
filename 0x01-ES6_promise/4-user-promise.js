export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    resolve({ firstName, lastName });
    // eslint-disable-next-line no-unused-vars
    reject();
  });
}
