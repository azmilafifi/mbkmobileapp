/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequest } from '../models/LoginRequest';
import type { SignupRequest } from '../models/SignupRequest';
import type { TokenRefreshRequest } from '../models/TokenRefreshRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthControllerService {

    /**
     * refreshtoken
     * @returns any OK
     * @throws ApiError
     */
    public static refreshtokenUsingPost({
request,
}: {
/**
 * request
 */
request: TokenRefreshRequest,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/refreshtoken',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * authenticateUser
     * @returns any OK
     * @throws ApiError
     */
    public static authenticateUserUsingPost({
loginRequest,
}: {
/**
 * loginRequest
 */
loginRequest: LoginRequest,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/signin',
            body: loginRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * registerUser
     * @returns any OK
     * @throws ApiError
     */
    public static registerUserUsingPost({
signUpRequest,
}: {
/**
 * signUpRequest
 */
signUpRequest: SignupRequest,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/signup',
            body: signUpRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
