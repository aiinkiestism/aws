'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    let response;
    
    switch(event.httpMethod) {
        case 'GET':
            let name = 'Lambda';
            if (event.queryStringParameters && event.queryStringParameters['name']) {
                name = event.queryStringParameters.name;
            }
            response = {
                statusCode: 200,
                body: `Hello, ${name}!`
            };
            break;
        default:
            response = {
                statusCode: 405,
                body: `Method Not Allowed`
            };
            break;
    }
    
    callback(null, response);
}
