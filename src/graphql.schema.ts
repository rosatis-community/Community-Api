
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Community {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    title?: Nullable<string>;
    communityIcon?: Nullable<string>;
    subscribers?: Nullable<number>;
}

export abstract class IQuery {
    abstract communities(): Nullable<Nullable<Community>[]> | Promise<Nullable<Nullable<Community>[]>>;

    abstract community(name?: Nullable<string>): Nullable<Community> | Promise<Nullable<Community>>;

    abstract posts(): Nullable<Nullable<Post>[]> | Promise<Nullable<Nullable<Post>[]>>;

    abstract post(id?: Nullable<string>): Nullable<Post> | Promise<Nullable<Post>>;
}

export class BelongsTo {
    _id?: Nullable<string>;
    type?: Nullable<string>;
}

export class Post {
    _id?: Nullable<string>;
    title?: Nullable<string>;
    author?: Nullable<string>;
    authorId?: Nullable<string>;
    upvote?: Nullable<number>;
    downvote?: Nullable<number>;
    score?: Nullable<number>;
    numComment?: Nullable<number>;
    belongsTo?: Nullable<BelongsTo>;
}

type Nullable<T> = T | null;
