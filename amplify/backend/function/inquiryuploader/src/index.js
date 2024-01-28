/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { SESClient, SendEmailCommand } =  require("@aws-sdk/client-ses");
const client = new SESClient({ region: process.env.REGION });

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const contactName = streamedItem.dynamodb.NewImage.name.S;
      const contactEmail = streamedItem.dynamodb.NewImage.email.S;
      const description = streamedItem.dynamodb.NewImage.description.S;
      const phone = streamedItem.dynamodb.NewImage.phone.S;
      const company = streamedItem.dynamodb.NewImage.company.S;
      const address = streamedItem.dynamodb.NewImage.address.S;
      console.log(process.env.SES_EMAIL);
      console.log(contactName);
      console.log(contactEmail);
      console.log(description);
      console.log(phone);
      console.log(company);
      console.log(address);
      const input = { // SendEmailRequest
        Source: process.env.SES_EMAIL, // required
        Destination: { // Destination
          ToAddresses: [ // AddressList
            process.env.SES_EMAIL
          ],
        },
        Message: { // Message
          Subject: { // Content
            Data: 'Inquiry Received From CNC Coolant Pumps'
          },
          Body: { // Body
            Text: { 
              Data: `Email: ${contactEmail},\n
              Name: ${contactName},\n 
              Description: ${description},\n 
              Phone: ${phone},\n 
              Company: ${company},\n 
              Address: ${address},\n` 
            },
          },
        }
      };
      const command = new SendEmailCommand(input);
      const response = await client.send(command);
      console.log(`response: ${JSON.stringify(response)}`);
    }
  }
  return { status: 'done' };
};