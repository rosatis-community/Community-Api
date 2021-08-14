
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Topic {
    _id?: Nullable<string>;
    title?: Nullable<string>;
}

export interface IQuery {
    getTopics(): Nullable<Nullable<Topic>[]> | Promise<Nullable<Nullable<Topic>[]>>;
    getTopicById(id?: Nullable<string>): Nullable<Topic> | Promise<Nullable<Topic>>;
}

type Nullable<T> = T | null;
