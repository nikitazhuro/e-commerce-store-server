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

const deployUrl = 'https://e-commerce-store-client.web.app';
const localUrl = 'http://localhost:8080'

const corsOptions = {
  origin: localUrl,
  credentials: true
}
app.use(cors(corsOptions));

server.start().then(() => {
  server.applyMiddleware({
    app,
    path: '/',
    cors: false,
  })
  app.listen(PORT); 
});
