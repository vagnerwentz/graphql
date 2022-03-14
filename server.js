import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url';
import { graphqlHTTP } from 'express-graphql'
import { loadFilesSync, loadFiles } from '@graphql-tools/load-files'
import { makeExecutableSchema } from '@graphql-tools/schema'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesArray = loadFiles(path.join(__dirname, '**/*.graphql'))
const resolversArray = loadFiles(path.join(__dirname), '**/*.resolvers.js')

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