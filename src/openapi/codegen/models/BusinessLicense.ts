/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Form } from './Form';
import type { Payment } from './Payment';
import type { User } from './User';

export type BusinessLicense = {
    amount?: number;
    endDate?: string;
    form?: Form;
    id?: number;
    licenseNumber?: string;
    payments?: Array<Payment>;
    startDate?: string;
    transactionDate?: string;
    transactionStatus?: 'APPROVED' | 'EXPIRED' | 'PENDING' | 'REJECTED';
    transactionType?: 'BUSINESS_LICENSE_PURCHASE';
    user?: User;
};
