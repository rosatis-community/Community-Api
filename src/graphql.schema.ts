
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCommunityInput {
    name: string;
    communityIcon?: Nullable<string>;
}

export class Community {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    title?: Nullable<string>;
    communityIcon?: Nullable<string>;
    subscribers?: Nullable<number>;
}

export abstract class IQuery {
    abstract community(name?: Nullable<string>): Nullable<Community> | Promise<Nullable<Community>>;

    abstract communities(): Nullable<Nullable<Community>[]> | Promise<Nullable<Nullable<Community>[]>>;

    abstract searchCommunities(term?: Nullable<string>): Nullable<Nullable<Community>[]> | Promise<Nullable<Nullable<Community>[]>>;

    abstract posts(): Nullable<Nullable<Post>[]> | Promise<Nullable<Nullable<Post>[]>>;

    abstract post(id?: Nullable<string>): Nullable<Post> | Promise<Nullable<Post>>;

    abstract user(username?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;

    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export abstract class IMutation {
    abstract createCommunity(payload?: Nullable<CreateCommunityInput>): Nullable<Community> | Promise<Nullable<Community>>;
}

export class Post {
    _id?: Nullable<string>;
    title?: Nullable<string>;
    author?: Nullable<User>;
    upvote?: Nullable<number>;
    downvote?: Nullable<number>;
    score?: Nullable<number>;
    numComment?: Nullable<number>;
    community?: Nullable<Community>;
}

export class User {
    _id?: Nullable<string>;
    username?: Nullable<string>;
}

type Nullable<T> = T | null;
