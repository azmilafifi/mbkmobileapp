import React from 'react';
import { Text, View, TextInput, Alert, StyleSheet } from "react-native"
import { useForm, Controller, FormState } from "react-hook-form"
import { Button } from 'react-native-paper';
import { useAppDispatch } from '../../hooks';
import { updateField } from '../../slice/formslice';
import {FormDTO} from "../../openapi/codegen";




// type FormData = {
//     applicantName?: string;
//     lastName?: string;
//     applicantAddress?: string;
//     applicantPostcode?: string;
//     applicantState?: string;
//     applicantPlaceOfBirth?: string;
//     applicantMobileNumber?: string;
//     applicantCitizenship?: string;
//     applicantGender?: string;
//     applicantMaritalStatus?: string;
//   applicantPlaceOfBusiness?: string;
//     applicantIc?:string
// };
  
  type PenjajaFormComponent1Props = {
    onDataSubmit: (data: FormDTO) => void;
  };
const PenjajaFormComponent1: React.FC<PenjajaFormComponent1Props> = ({onDataSubmit }) => {
  const { control, handleSubmit,formState: { errors } } = useForm<FormDTO>();

  const dispatch = useAppDispatch();
  
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
        defaultValue=''
      />
      {/* {errors.firstName && <Text style={styles.errorText}>This is required.</Text>} */}

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
      />
      {/* {errors.lastName && <Text style={styles.errorText}>This is required.</Text>} */}

    <TextInput style={styles.address} placeholder="Address" />
          <View style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'space-between',
              alignItems: 'center',
              gap:10,
              
          }}>
            <TextInput style={styles.input} placeholder="Postcode" />
            <TextInput style={styles.input} placeholder="State" />
        </View>
      
      <TextInput style={styles.input} placeholder="Place of birth" />
      <Controller
        control={control}
        rules={{ required: true, minLength: 6, maxLength: 12 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.applicantAddress && styles.errorInput]}
            placeholder="Mobile number"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="applicantAddress"
      />
      {/* {errors.mobileNumber && (
        <Text style={styles.errorText}>
          Mobile number is required and should be between 6 and 12 characters.
        </Text>
      )} */}

      

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
        />
      </View>
      <TextInput style={styles.input} placeholder="Tempat berniaga sekarang (jika ada)" />
      <TextInput style={styles.input} placeholder="Tempoh bermastautin" />

      <Button style={styles.button} buttonColor='#243FD6' textColor='white' onPress={handleSubmit(onSubmit)}>Save and continue</Button>
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
