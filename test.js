const axios = require('axios');

// axios
//   .post('https://shielded-crag-79344.herokuapp.com/api/v1/auth/register', {
//     email: 'thangtest2@gmail.com',
//     username: 'thangtest2',
//     password: '123456789',
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

axios
  .post('https://shielded-crag-79344.herokuapp.com/api/v1/auth/login', {
    email: 'thangtest2@gmail.com',
    password: '123456789',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
