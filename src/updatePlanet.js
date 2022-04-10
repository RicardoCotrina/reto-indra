const AWS = require("aws-sdk");

const updatePlanet = async (event) => {
  try{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const { done, name_planet, diameter, climate, population } = JSON.parse(event.body);

    await dynamodb
      .update({
        TableName: "PlanetTable",
        Key: { id },
        UpdateExpression: "set done = :done, name_planet = :name_planet, diameter = :diameter, climate = :climate, population = :population",
        ExpressionAttributeValues: {
          ":done": done,
          ":name_planet": name_planet,
          ":diameter": diameter,
          ":climate": climate,
          ":population": population
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return {
      status: 200,
      body: JSON.stringify({
        message: "Planet updated successfully",
      }),
    };
  }catch(e){
    console.log('Se detecto el siguiente error: ', e);
  }
};

module.exports = {
  updatePlanet,
};