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
  origin: 'https://e-commerce-store-client.web.app',
  credentials: true
}
app.use(cors(corsOptions));

server.start().then(res => {
  server.applyMiddleware({
    app,
    path: '/',
    cors: false,
  })
  app.listen(PORT); 
});
