/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormDTO } from '../models/FormDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FormControllerService {

    /**
     * submitForm
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static submitFormUsingPost({
formDto,
name,
}: {
/**
 * formDTO
 */
formDto: FormDTO,
name?: string,
}): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forms',
            query: {
                'name': name,
            },
            body: formDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
