import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FormDTO } from '../openapi/codegen';



// interface FormState {
//     firstName: string;
//     lastName: string;
//     address: string;
//     postcode: string;
//     state: string;
//     placeOfBirth: string;
//     mobileNumber: string;
//     citizenship: string;
//     gender: string;
//     maritalStatus: string;
//     businessLocation: string;
//     spouseName: string;
//     spouseMobileNumber: string;
//     spouseIC: string;
//     spouseJob: string;
//     spouseAddress: string;
//     dependants: string;
//     capitalAmount: string;
//     businessExperience: string;
//     businesstype: string;
//     landType: string;
//     saletype: string;
//     sellingLocation: string;
//     workingTime: string;
//     vehicleType: string;
//     carNumber: string;
//     coordinate: string;
//     day: string;
//     siteMBK: string;
//     siteCouncil: string;
//   }


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
        // updateField: (state,action: PayloadAction<{ key: keyof FormDTO}>) => {  
        //     state = { ...state, action.payload }
        // },
        
        updateField: (state, action: PayloadAction<{ key: keyof FormDTO; value: any }>) => {
            const { key, value } = action.payload;
            if (state.hasOwnProperty(key)) {
              state[key] = value;
            }
        },
        
        resetForm: () => initialState,
        },
    },
)



export const { updateField, resetForm } = formSlice.actions;

export default formSlice.reducer;