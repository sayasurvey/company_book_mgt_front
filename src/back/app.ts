import express, { Request, Response, Application } from "express";
import { ApolloServer, gql } from 'apollo-server-express'

export const app: Application = express();
// const port = 3010;
const port = 4000;

const typeDefs = gql`
  type Query {
   hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'graphql to CBM'
  }
}

const gqlServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app })

  app.listen(port, () => {
    console.log(`Graphql app listening on port ${port}`);
  });
}

gqlServer();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello CBM");
});