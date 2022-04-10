const AWS = require('aws-sdk');
const axios = require('axios');

const getPlanet = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    //const apiSW = `https://swapi.py4e.com/api/planets/${id}/`;

    try{
        //const result = await axios.get(apiSW);
        //const body = result.data;

        const result = await dynamodb.get({
            TableName: 'PlanetTable',
            Key: {
                id
            }
        }).promise();
    
        const planet = result.Item;
        
        return {
            status: 200,
            body: planet
        }
    }catch(e){
        console.log('Error detectado: ', e);
    }
}

module.exports = {
    getPlanet,
}