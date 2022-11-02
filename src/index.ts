import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { LibraryResolver } from "./resolvers/LibraryResolver";

async function main() {
    const schema = await buildSchema({
        resolvers: [LibraryResolver]
    })
    const server = new ApolloServer({schema});
    const serverInfo = await server.listen();
    console.log(serverInfo)
}

main();