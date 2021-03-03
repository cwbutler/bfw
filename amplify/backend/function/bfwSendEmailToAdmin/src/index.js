/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */const { sendEmail } = require('./api');

exports.handler = async (event) => {
    try {
        await sendEmail(event.input);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
