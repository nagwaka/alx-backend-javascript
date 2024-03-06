export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
    // eslint-disable-next-line no-unused-vars
    resolve();
  });
}
