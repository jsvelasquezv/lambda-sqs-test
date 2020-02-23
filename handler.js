'use strict';
const axios = require('axios');

module.exports.sender = async event => {
  const response = await axios.get('https://testls.requestcatcher.com/test');
  console.log('response: ', response.data);
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Go Serverless v1.0! Your function executed successfully!',
  //       input: event
  //     },
  //     null,
  //     2
  //   )
  // };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  return {
    message: 'Go Serverless v1.0! Your function executed successfully!',
    event
  };
};
