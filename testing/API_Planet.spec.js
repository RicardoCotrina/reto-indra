const request = require('supertest');

describe('Testing API-Planet', () => {
    describe('GET /planet/:id', () => {
        test('Should respond with a 200 status code', async () => {
            try{
                const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').get('/planet/f089a321-bb00-4ca3-9da0-f8834dbf48fe').send();
                expect(response.statusCode).toBe(200);
            }catch(e){
                console.log('Error: ', e);
            }
        });
        test('Should body is a object', async () => {
            try{
                const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').get('/planet/f089a321-bb00-4ca3-9da0-f8834dbf48fe').send();
            expect(typeof response.body).toBe('object');
            }catch(e){
                console.log('Error: ', e);
            }
        });
    });

    describe('GET /planets', () => {
        test('Should respond with a 200 status code', async () => {
            try{
                const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').get('/planets').send();
                expect(response.statusCode).toBe(200);
            }catch(e){
                console.log('Error: ', e);
            }
        });
        test('Should body is a array', async () => {
            try{
                const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').get('/planets').send();
                const data = response.body;
                expect(data.body).toBeInstanceOf(Array);
            }catch(e){
                console.log('Error: ', e);
            }
        });
    });

    describe('POST /planet', () => {
        const newTask = {
            diameter: 6800,
            climate: 'Templadito',
            population: 0
        }
        
        describe('POST goods', () => {
            test('Should repond a 200 status code', async () => {
                try{
                    const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').post('/planet').send(newTask);
                    expect(response.statusCode).toBe(200);
                }catch(e){
                    console.log('Error: ', e);
                }
            });
        
            test('Should defined name planet in response body', async () => {
                try{
                    const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').post('/planet').send(newTask);
                    const data = response.body;
                    expect(data.body.name_planet).toBeDefined();
                }catch(e){
                    console.log('Error: ', e);
                }
            });
    
            test('Should have a content-type: appication/json in header', async () => {
                try{
                    const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').post('/planet').send(newTask);
                    expect(response.headers["content-type"]).toEqual(
                        expect.stringContaining('json')
                    );
                }catch(e){
                    console.log('Error: ', e);
                }
            });
        });

        describe('POST fails', () => {
            test('Should respond with  a 400 status code', async() => {
                try{
                    const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').post('/planet').send(newTask);
                    const data = response.body;
                    expect(data.status).toBe(400);
                }catch(e){
                    console.log(' Error: ', e);
                }
            })
        })
    });

    describe('PUT /planet/:id', () => {
        const newTask = {
            done: true,
            name_planet: 'Venus',
            diameter: 6800,
            climate: 'Templadito',
            population: 0
        }

        const id = 'cf8094d4-1caf-47c0-817d-091e9dd4b8b4';
    
        test('Should repond a 200 status code', async () => {
            try{
                const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').put(`/planet/${id}`).send(newTask);
                expect(response.statusCode).toBe(200);
            }catch(e){
                console.log('Error: ', e);
            }          
        });
        test('Should body is a object', async () => {
            try{
                const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').put(`/planet/${id}`).send(newTask);
                expect(typeof response.body).toBe('object');
            }catch(e){
                console.log('Error: ', e);
            }
        });
        test('Should respond with finally message', async ()=>{
            try{
                const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').put(`/planet/${id}`).send(newTask);
                expect(typeof response.body.body).toBe('string');
                expect(JSON.parse(response.body.body).message).toEqual('Planet updated successfully');
            }catch(e){
                console.log('Error: ', e);
            }
        });
    });

    describe('DELETE /planet/:id', () => {
        const id = '0e5b2c24-1e5b-4725-a7d4-0350dcbe4b3c';
        test('Should repond a 200 status code', async () => {
            try{
                const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').delete(`/planet/${id}`).send();
                expect(response.statusCode).toBe(200);
            }catch(e){
                console.log('Error: ', e);
            }
        });
        test('Should body is a object', async () => {
            try{
                const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').delete(`/planet/${id}`).send();
                expect(typeof response.body).toBe('object');
            }catch(e){
                console.log('Error: ', e);
            }
        });
        test('Should respond with finally message', async ()=>{
            try{
                const response = await request('https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com').delete(`/planet/${id}`).send();
                expect(typeof response.body.body).toBe('string');
                expect(JSON.parse(response.body.body).message).toEqual('Deleted planet successfully');
            }catch(e){
                console.log('Error: ', e);
            }
        });
    });
});
