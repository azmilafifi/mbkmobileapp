import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FormDTO } from '../openapi/codegen';


const initialState:FormDTO = {
    applicantAddress: '',
    applicantCitizenship: '',
    applicantGender: '',
    applicantIc: '',
    applicantMaritalStatus: '',
    applicantMobileNumber: '',
    applicantName: '',
    applicantOccupation: '',
    applicantPlaceOfBirth: '',
    applicantPlaceOfBusiness: '',
    applicantPostcode: '',
    applicantResidencyPeriod: '',
    applicantState: '',
    applicationDate: '',
    businessExp:'' ,
    businessType: '',
    capitalMoney: 0,
    endDate: '',
    formDetails: '',
    licenseNumber: '',
    noOfDependents: 0,
    operationTime: '',
    propertyStatus: '',
    salesLocation: '',
    salesType: '',
    spouseAddress: '',
    spouseIc: '',
    spouseMobileNumber: '',
    spouseName: '',
    spouseOccupation: '',
    startDate: '',
    staticBusinessLocations: '',
    vehicleNumber: '',
    vehicleType: '',
};

export const formSlice = createSlice({
    name: 'form',
    initialState: initialState ,
    reducers: {        
        updateField: (state, action: PayloadAction<{ key: keyof FormDTO; value: any }>) => {
            const { key, value } = action.payload;
            if (state.hasOwnProperty(key)) {
              state[key] = value;
            }
        },
        updateFields: (state, action: PayloadAction<{ key: keyof FormDTO; value: any }[]>) => {
            action.payload.forEach(({ key, value }) => {
                state[key] = value;
            })
        },
        
        resetForm: (state) => {
            Object.assign(state, initialState)
        },
        },
    },
)



export const { updateField, resetForm, updateFields } = formSlice.actions;

export default formSlice.reducer;