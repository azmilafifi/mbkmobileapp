import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'react-native-paper';
import { FormDTO } from '../../openapi/codegen';
import { useAppSelector } from '../../hooks';

type PenjajaFormComponent2Props = {
  onDataSubmit: (data: FormDTO) => void;
};

const PenjajaFormComponent2: React.FC<PenjajaFormComponent2Props> = ({ onDataSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDTO>();

  const formDataFromRedux = useAppSelector((state)=> state.form )

  const onSubmit = (data: FormDTO) => {
    onDataSubmit(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Maklumat Suami/Isteri</Text>
      <Controller
        control={control}
        rules={{ maxLength: 80 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.spouseName && styles.errorInput]}
            placeholder="Spouse's Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="spouseName"
        defaultValue={formDataFromRedux.spouseName}
      />

      <Controller
        control={control}
        rules={{ maxLength: 12 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.spouseMobileNumber && styles.errorInput]}
            placeholder="Spouse's Mobile Number"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="spouseMobileNumber"
        defaultValue={formDataFromRedux.spouseMobileNumber}
      />

      <Controller
        control={control}
        rules={{ maxLength: 12 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.spouseIc && styles.errorInput]}
            placeholder="Spouse's IC"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="spouseIc"
        defaultValue={formDataFromRedux.spouseIc}
      />

      <Controller
        control={control}
        rules={{ maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.spouseOccupation && styles.errorInput]}
            placeholder="Spouse's Job"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="spouseOccupation"
        defaultValue={formDataFromRedux.spouseOccupation}
      />

      <Controller
        control={control}
        rules={{ maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.spouseAddress && styles.errorInput]}
            placeholder="Spouse's Address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="spouseAddress"
        defaultValue={formDataFromRedux.spouseAddress}
      />

      <View
        style={{
          height: 2,
          backgroundColor: '#ECECEC',
          marginTop:10,
          marginBottom:30,
        }}>
        </View>

      <Controller
        control={control}
        rules={{ maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.noOfDependents && styles.errorInput]}
            placeholder="Dependants"
            onBlur={onBlur}
            onChangeText={onChange}
            value={String(value)}
          />
        )}
        name="noOfDependents"
        defaultValue={formDataFromRedux.noOfDependents}
      />

      <Controller
        control={control}
        rules={{ maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.capitalMoney && styles.errorInput]}
            placeholder="Capital Amount"
            onBlur={onBlur}
            onChangeText={onChange}
            value={String(value)}
          />
        )}
        name="capitalMoney"
        defaultValue={formDataFromRedux.capitalMoney}
      />

      <Controller
        control={control}
        rules={{ maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.businessExp && styles.errorInput]}
            placeholder="Business Experience"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="businessExp"
        defaultValue={formDataFromRedux.businessExp}
      />

      <Button
        style={styles.button}
        buttonColor='#243FD6'
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        Save and Continue
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
    marginHorizontal: 5,
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
    flex: 1,
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
    borderRadius: 15,
  },
  errorText: {
    color: '#d9534f',
    fontSize: 12,
  },
  button: {
    height:43,
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'center',
  },
});

export default PenjajaFormComponent2;
