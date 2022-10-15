import { ApolloError } from "apollo-server";
import { Arg, Mutation, Resolver } from "type-graphql";
import prisma from "../database";

@Resolver()
export class BookResolver {

  @Mutation(() => Boolean)
  async likeBook(
    @Arg("bookId", { nullable: false }) bookId: number,
  ) {
    try {
      const likedBook = await prisma.book.update({
        where: {
          id: bookId
        },
        data: {
          likes: {
            increment: 1
          }
        }
      })

      return !!likedBook;
    } catch(error) {
      throw new ApolloError('Ocorreu um problema ao tentar aumentar o número de likes deste livro', '002');
    }
  }

  @Mutation(() => Boolean)
  async updateBookViews(
    @Arg("bookId", { nullable: false }) bookId: number,
  ) {
    try {
      const viewedBook = await prisma.book.update({
        where: {
          id: bookId
        },
        data: {
          views: {
            increment: 1
          }
        }
      })

      return !!viewedBook;
    } catch(error) {
      throw new ApolloError('Ocorreu um problema ao tentar aumentar o número de views deste livro', '002');
    }
  }
}