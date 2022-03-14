const path = require('path')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))

const productsResolvers = require('./products/products.resolvers')
const ordersResolvers = require('./orders/orders.resolvers')
const resolversArray = [productsResolvers, ordersResolvers]

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
})

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))

app.listen(3000, () => {
  console.log("Running GraphQL server...")
})