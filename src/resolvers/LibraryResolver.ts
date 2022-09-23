import { Query, Resolver } from "type-graphql";

@Resolver()
export class LibraryResolver {

  @Query(() => String)
  async recommended() {
    return [
      {
        book: 'book'
      }
    ]
  }
}