const path = require('path')
const express = require('express')

const { ApolloServer } = require('apollo-server-express')

const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))

const productsResolvers = require('./products/products.resolvers')
const ordersResolvers = require('./orders/orders.resolvers')
const resolversArray = [productsResolvers, ordersResolvers]

async function startApolloServer() {
  const app = express()

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  })

  const server = new ApolloServer({
    schema,
  })

  await server.start()
  server.applyMiddleware({ app , path: '/graphql' })

  app.listen(3000, () => {
    console.log("Running GraphQL server...")
  })
}

startApolloServer();