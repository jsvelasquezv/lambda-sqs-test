'use strict';
const axios = require('axios');
const firebase = require('firebase-admin');
const {
  urlToRequest,
  firebaseSecretsFile,
  fireStoreUrl,
  collectionName
} = process.env;
const serviceAccount = require(`./${firebaseSecretsFile}`);
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: fireStoreUrl
});
const fireStore = firebase.firestore();

module.exports.sender = async _event => {
  const id = Math.floor(Math.random() * 100) + 1;
  const response = await axios.get(`${urlToRequest}/${id}`);

  await fireStore.collection(collectionName).add({
    id,
    name: response.data.name,
    url: response.data.url
  });

  return {
    message: 'Go Serverless v1.0! Your function executed successfully!'
  };
};
