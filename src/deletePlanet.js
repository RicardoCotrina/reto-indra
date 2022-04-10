const AWS = require("aws-sdk");

const deletePlanet = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  try{
    await dynamodb
    .delete({
      TableName: "PlanetTable",
      Key: {
        id,
      },
    })
    .promise();

    return {
      status: 200,
      body: {
        message: 'Deleted planet successfully'
      }
    };
  }catch(e){
    console.log('Se detecto un error: ', e);
  }
};

module.exports = {
  deletePlanet,
};