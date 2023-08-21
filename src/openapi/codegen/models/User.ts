/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Payment } from './Payment';
import type { Role } from './Role';

export type User = {
    address?: string;
    citizenship?: string;
    email: string;
    emailVerified?: boolean;
    fullName: string;
    gender?: string;
    ic: string;
    id?: number;
    maritalStatus?: string;
    mobileNumber: string;
    occupation?: string;
    password: string;
    payments?: Array<Payment>;
    placeOfBirth?: string;
    postcode?: string;
    roles?: Array<Role>;
    state?: string;
    verificationUuid?: string;
};
