/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { Comment } from './Comment';
export type FeatureRequestCreateRequest = {
    title: string;
    content: string;
    votes?: number;
    category?: Category;
    author_username: string;
    comments?: Array<Comment>;
};

