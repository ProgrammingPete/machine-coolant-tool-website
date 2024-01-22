

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
      const contactMessage = streamedItem.dynamodb.NewImage.message.S;
      const phone = streamedItem.dynamodb.NewImage.phone.S;
      console.log(process.env.SES_EMAIL);
      console.log(contactName);
      console.log(contactEmail);
      console.log(contactMessage);
      console.log(phone);
      const input = { // SendEmailRequest
        Source: process.env.SES_EMAIL, // required
        Destination: { // Destination
          ToAddresses: [ // AddressList
            process.env.SES_EMAIL
          ],
        },
        Message: { // Message
          Subject: { // Content
            Data: 'Website Contact Request'
          },
          Body: { // Body
            Text: { Data: `Email: ${contactEmail},\n Name: ${contactName},\n Message: ${contactMessage},\n Phone: ${phone}` },
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