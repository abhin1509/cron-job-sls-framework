const AWS = require('aws-sdk');
const SES = new AWS.SES();
const http = require('http');

const SITE = 'http://gos54t34ogle.com';

const serviceDown = async () => {
   try {
      const params = {
         Destination: {
            ToAddresses: ['abhin1509@gmail.com']
         },
         Message: {
            Body: {
               Text: { Data: `${SITE} is down.` },
            },
            Subject: { Data: "Service is down!!!" },
         },
         Source: 'abhin1509@gmail.com',
      };
      await SES.sendEmail(params).promise(); //return null if unsuccessful
   }
   catch (e) {
      console.log(e);
   }
}

module.exports.hello = (event) => {
   console.log(event);
   http.get(SITE, function(res) {
      console.log("response ", res);
   }).on('error', function(e) {
      console.log(e);
      console.log("sending email...");
      serviceDown();
   });
};
