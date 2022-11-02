import { Resolver, Query } from "type-graphql"

@Resolver()
export class LibraryResolver {
    @Query(() => [String])
    categories() {
        const categoriesList = ["Aventura", "Aventura", "Romance"]
        return categoriesList;
    }

    @Query(() => String)
    books() {
        const book = "Aventura"
        return book;
    }
}