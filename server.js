const express = require('express');
const graphqlHTTP = require('express-graphql');

const { schema } = require('./schema');
const { root } = require('./root');

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000);
console.log('GraphQL server now running on localhost:4000');
