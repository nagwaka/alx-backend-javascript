import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call signUpUser and uploadPhoto functions with provided arguments
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Handle promises using Promise.all
  return Promise.all([signUpPromise, uploadPromise])
    .then((results) => results.map((result) => ({ status: 'fulfilled', value: result })))
    .catch((error) => [{ status: 'rejected', value: error }]);
}
