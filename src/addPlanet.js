const { v4 } = require('uuid');
const AWS  = require('aws-sdk');
const middy = require('@middy/core');
const jsonBodyParser = require('@middy/http-json-body-parser');

const addPlanet = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { name_planet, diameter, climate, population } = event.body;
    const createdAt = new Date();
    const id = v4();

    const newTask = {
        id,
        createdAt,
        name_planet,
        diameter,
        climate,
        population,
    } 
    try{
        await dynamodb.put({
            TableName: 'PlanetTable',
            Item: newTask,
        })
        .promise()
    
        return {
            statusCode: 200,
            body: JSON.stringify(newTask),
        }
    }catch(e){
        console.log('Se detecto un error al crear el elemento: ', e);
    }
};

module.exports = {
    addPlanet: middy(addPlanet).use(jsonBodyParser()),
}