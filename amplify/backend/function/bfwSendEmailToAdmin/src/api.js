const AWS = require('aws-sdk');

const ses = new AWS.SES();
const Charset = 'UTF-8';
const adminEmail = process.env.ADMIN_EMAIL;

async function sendEmail(input) {
  const params = {
    Source: input.from,
    Destination: {
      ToAddresses: adminEmail.split(','),
      CcAddresses: input.cc,
      BccAddresses: input.bcc
    },
    Message: {
      Subject: { Charset, Data: input.subject },
      Body: {
        Html: { Charset, Data: input.html || input.text || '' },
        Text: { Charset, Data: input.text || input.html || '' }
      }
    }
  };

  return await ses.sendEmail(params).promise();
}
exports.sendEmail = sendEmail;
