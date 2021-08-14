
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Post {
    _id?: Nullable<string>;
    title?: Nullable<string>;
    author?: Nullable<string>;
    authorId?: Nullable<string>;
    upvote?: Nullable<number>;
    downvote?: Nullable<number>;
    score?: Nullable<number>;
    numComment?: Nullable<number>;
}

export abstract class IQuery {
    abstract posts(): Nullable<Nullable<Post>[]> | Promise<Nullable<Nullable<Post>[]>>;

    abstract post(id?: Nullable<string>): Nullable<Post> | Promise<Nullable<Post>>;
}

type Nullable<T> = T | null;
