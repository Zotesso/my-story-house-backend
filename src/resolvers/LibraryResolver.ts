import { ApolloError } from "apollo-server";
import { Arg, Query, Resolver } from "type-graphql";
import prisma from "../database";
import { Book } from "../models/library.model";

@Resolver()
export class LibraryResolver {

  @Query(() => [String])
  async categories() {
    try {
      const categoriesList = await prisma.categories.findMany({
        select: {
          name: true,
        },
      });

      const categories = categoriesList.map((category) => {
        return category.name;
      });

      return categories;
    } catch(error) {
      return [];
    }
  }

  @Query(() => [Book])
  async listBooks(
    @Arg("offset", { nullable: false }) offset: number,
  ) {
    try {
      const bookList = await prisma.book.findMany({
        skip: offset,
        take: 5,
      })

      return bookList;
    } catch(error) {
      throw new ApolloError('Ocorreu um problema ao tentar realiazar a listagem dos livros', '001');
    }
  }
}