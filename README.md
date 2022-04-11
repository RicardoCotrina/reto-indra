# Reto Indra

En este prueba se realizó una integración entre los servicios de AWS(Lambda, API Gateway, DynamoDB) y el framework Serverless, utilizando en el backend Node JS.

## Usos
Podemos entoncrar un CRUD para poder interactuar a lo largo de la presente API-Rest

## Routes:
- GET → https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com/planets, para traer todos los planetas con sus respectivas características.

- GET → https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com/planet/:id, donde id: Es el identificador del planeta ingresado

- POST → https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com/planet, Con esta ruta creamos un nuevo planeta donde el objecto a ingresar debe contener por ejemplo:
{   
    "name_planet": "Tierra",
    "diameter": "1500",
    "climate": "Arido",
    "population": "0"
}

- PUT → https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com/planet, Para actualizar la información de uno de los planetas, ingresando una propiedad adicional al objeto que ya se había mencionado, que es 'done', seteando un valor de true indicando que se realizó la actualización del registro. 

Por ejemplo:

{   "done": true,
    "name_planet": "Tierra",
    "diameter": "1500",
    "climate": "Arido",
    "population": "0" }

- DELETE →  https://dsw0kj2orl.execute-api.us-west-2.amazonaws.com/planet/:id, donde id: Es el identificador del planeta ingresado

## Testing
Tambien se encontrará una carpeta con las pruebas unitarias realizadas a cada una de las peticiones para poder garantizar la funcionalidad de la API, esta fue realizada con JEST.

