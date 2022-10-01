import { Query, Resolver } from "type-graphql";

@Resolver()
export class LibraryResolver {

  @Query(() => [String])
  async categories() {
    return [
      'Shoujo',
      'Shounnen',
      'Seinen',
      'Aventura',
      'Ação',
      'Romance',
      'Comédia',
      'Drama',
    ]
  }
}