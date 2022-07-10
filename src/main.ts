import { ApolloServer } from 'apollo-server-express';
const express = require('express');
const cors = require('cors');

import typeDefs from './schema';
import resolvers from './resolvers';

const PORT = process.env.PORT || 4000

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
const app = express();

const corsOptions = {
  origin: 'https://e-commerce-store-client.herokuapp.com',
  credentials: true
}
app.use(cors(corsOptions));

server.applyMiddleware({
  app,
  path: '/',
  cors: false,
})


app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);