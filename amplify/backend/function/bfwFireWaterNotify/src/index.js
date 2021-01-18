/* Amplify Params - DO NOT EDIT
	API_BFW_GRAPHQLAPIENDPOINTOUTPUT
	API_BFW_GRAPHQLAPIIDOUTPUT
	API_BFW_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from BFW Notification System!'),
    };
    return response;
};
