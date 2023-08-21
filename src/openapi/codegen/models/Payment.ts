/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BusinessLicense } from './BusinessLicense';
import type { User } from './User';

export type Payment = {
    amount?: number;
    businessLicense?: BusinessLicense;
    createdTime?: string;
    errorMessage?: string;
    id?: number;
    status?: 'FAIL' | 'SUCCESS' | 'TIMEOUT';
    updatedTime?: string;
    user?: User;
};
