const AWS = require('aws-sdk');
//const axios = require('axios');

const getPlanets = async (event) => {
    
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const result = await dynamodb.scan({
            TableName: 'PlanetTable'
        }).promise();

        const planets = result.Items;

        console.log('Resultados del SCAN: ', planets);

        return {
            status: 200,
            body: planets
        }
    }catch(e){
        console.log('Error detectado: ', e);
    }
}

module.exports = {
    getPlanets,
}