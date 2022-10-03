import { Query, Resolver } from "type-graphql";
import prisma from "../database";

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
    } catch(e) {
      return [];
    }
  }
}