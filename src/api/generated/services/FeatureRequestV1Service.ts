/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureRequestCreateRequest } from '../models/FeatureRequestCreateRequest';
import type { FeatureRequestCreateResponse } from '../models/FeatureRequestCreateResponse';
import type { FeatureRequestGetResponse } from '../models/FeatureRequestGetResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FeatureRequestV1Service {
    /**
     * Get Feature Requests
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getFeatureRequestsApiV1FeatureRequestGet(): CancelablePromise<Array<any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/feature-request',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Create Feature Request
     * @returns FeatureRequestCreateResponse Successful Response
     * @throws ApiError
     */
    public static createFeatureRequestApiV1FeatureRequestPost({
        requestBody,
    }: {
        requestBody: FeatureRequestCreateRequest,
    }): CancelablePromise<FeatureRequestCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/feature-request',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Feature Request By Id
     * @returns FeatureRequestGetResponse Successful Response
     * @throws ApiError
     */
    public static getFeatureRequestByIdApiV1FeatureRequestIdGet({
        id,
    }: {
        id: string,
    }): CancelablePromise<FeatureRequestGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/feature-request/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Sample Resource
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateSampleResourceApiV1FeatureRequestIdPut({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: FeatureRequestCreateRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/feature-request/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Feature Request
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteFeatureRequestApiV1FeatureRequestIdDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/feature-request/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
            },
        });
    }
}
