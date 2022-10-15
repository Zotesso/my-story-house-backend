import { Field, ObjectType } from "type-graphql";

export interface Book {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  imageCoverUrl: string;
  published: boolean;
  likes: number;
  views: number;
  authorId: number;
}

@ObjectType()
export class Book {
  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field()
  videoUrl!: string;

  @Field()
  imageCoverUrl!: string;

  @Field()
  published!: boolean;

  @Field()
  likes!: number;

  @Field()
  views!: number;

  @Field()
  authorId!: number;

  @Field()
  email!: string
}
