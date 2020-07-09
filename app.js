const express = require("express");
const graphqlHttp = require("express-graphql").graphqlHTTP;
const graphqlSchema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();

app.use(
  "/graphql",
  graphqlHttp({
    schema : graphqlSchema,
    rootValue: resolvers,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
