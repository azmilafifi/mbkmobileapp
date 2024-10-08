import React from 'react';
import { Text, View, TextInput, Alert, StyleSheet } from "react-native"
import { useForm, Controller} from "react-hook-form"
import { Button } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateField } from '../../slice/formslice';
import {FormDTO} from "../../openapi/codegen";

  
  type PenjajaFormComponent1Props = {
    onDataSubmit: (data: FormDTO) => void;
  };
const PenjajaFormComponent1: React.FC<PenjajaFormComponent1Props> = ({onDataSubmit }) => {
  const { control, handleSubmit,formState: { errors } } = useForm<FormDTO>();

  const dispatch = useAppDispatch();
  const formDataFromRedux = useAppSelector((state)=> state.form )
  
  const handleFieldChange = (field: keyof FormDTO, value: string) => {
    // Dispatch action to update Redux state
    dispatch(updateField({ key: field, value }));
  };
  
  const onSubmit = (data: FormDTO) => {

    onDataSubmit(data);

  };

  return (
      <View style={styles.container}>
      <Text style={styles.formTitle}>Maklumat Peribadi Pemohon</Text>
      
      <Controller
        control={control}
        rules={{ required: true, maxLength: 80 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.applicantName && styles.errorInput]}
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="applicantName"
        defaultValue={formDataFromRedux.applicantName}
      />

      <Controller
        control={control}
        rules={{ required: true, maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.applicantIc && styles.errorInput]}
            placeholder="Identification Number"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="applicantIc"
        defaultValue={formDataFromRedux.applicantIc}
      />

      <Controller
        control={control}
        rules={{ required: true, maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.applicantOccupation && styles.errorInput]}
            placeholder="Pekerjaan"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="applicantOccupation"
        defaultValue={formDataFromRedux.applicantOccupation}
      />  
      
      <Controller
        control={control}
        rules={{ required: true, maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.address, errors.applicantAddress && styles.errorInput]}
            placeholder="Address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="applicantAddress"
        defaultValue={formDataFromRedux.applicantAddress}
      />   
      
      <View style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'space-between',
              alignItems: 'center',
        gap: 10,
      }}>
        <Controller
        control={control}
        rules={{ required: true, maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.applicantPostcode && styles.errorInput]}
            placeholder="Postcode"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="applicantPostcode"
        defaultValue={formDataFromRedux.applicantPostcode}
        />  
        <Controller
        control={control}
        rules={{ required: true, maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.applicantState && styles.errorInput]}
            placeholder="State"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="applicantState"
        defaultValue={formDataFromRedux.applicantState}
        />        
      </View>
      
      <Controller
        control={control}
        rules={{ required: true, minLength: 6, maxLength: 12 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.applicantPlaceOfBirth && styles.errorInput]}
            placeholder="Place of birth" 
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="applicantPlaceOfBirth"
        defaultValue={formDataFromRedux.applicantPlaceOfBirth}
      />   

      <Controller
        control={control}
        rules={{ required: true, minLength: 6, maxLength: 12 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.applicantMobileNumber && styles.errorInput]}
            placeholder="Mobile number"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="applicantMobileNumber"
        defaultValue={formDataFromRedux.applicantMobileNumber}
      />    

      <View style={styles.selectContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Warganegara"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="applicantCitizenship"
          defaultValue={formDataFromRedux.applicantCitizenship}
        />
      </View>

      <View style={styles.selectContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Jantina"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="applicantGender"
          defaultValue={formDataFromRedux.applicantGender}
        />
      </View>

      <View style={styles.selectContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Taraf Perkahwinan"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="applicantMaritalStatus"
          defaultValue={formDataFromRedux.applicantMaritalStatus}
        />
      </View>

      
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.applicantPlaceOfBusiness && styles.errorInput]}
            placeholder="Tempat berniaga sekarang (jika ada)" 
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="applicantPlaceOfBusiness"
        defaultValue={formDataFromRedux.applicantPlaceOfBusiness}
      /> 

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.applicantResidencyPeriod && styles.errorInput]}
            placeholder="Tempoh bermastautin"  
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="applicantResidencyPeriod"
        defaultValue={formDataFromRedux.applicantResidencyPeriod}
      /> 

      <Button
        style={styles.button}
        buttonColor='#243FD6'
        textColor='white'
        onPress={handleSubmit(onSubmit)}>
        Save and continue
      </Button>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    formTitle: {
        marginBottom: 20,
        fontSize: 16,
        fontWeight: '500',
        marginHorizontal:5,
    },
    address: {
        height: 81,  
        width: '100%',
        backgroundColor: '#fff',    
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 15,
        shadowColor: '#000',        
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,         
        shadowRadius: 4,            
        elevation: 3,  
      },
      input: {
          height: 43,
          flex:1,
        backgroundColor: '#fff',    
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 15,
        shadowColor: '#000',        
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,         
        shadowRadius: 4,            
        elevation: 3,  
        },
      errorInput: {
        borderColor: '#d9534f', // Red border for validation error
        borderWidth: 1.5,
        borderRadius:15,
      },
      errorText: {
        color: '#d9534f',
        fontSize: 12,
      },
      selectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      selectLabel: {
        marginRight: 10,
        fontSize: 16,
  },
    button: {
      height: 43,
      borderRadius: 15,
      justifyContent: 'center',
      }
});

export default PenjajaFormComponent1;
