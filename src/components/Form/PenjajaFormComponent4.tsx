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
      <Text style={styles.formTitle}>Bahagian B - Permohonan Permit Pasar Lambak</Text>
      
      <View style={styles.inputRow}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Select day</Text>
        </View>
        <Controller
        control={control}
        rules={{ maxLength: 80 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.selectedDay && styles.errorInput]}
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="selectedDay"
        defaultValue={formDataFromRedux.selectedDay}
      />
      </View>

      <View style={styles.inputRow}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Choose Tapak MBK</Text>
        </View>
        <Controller
        control={control}
        rules={{ maxLength: 80 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.mbkSite && styles.errorInput]}
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="mbkSite"
        defaultValue={formDataFromRedux.mbkSite}
      />
      </View>   
      
      <View style={styles.inputRow}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Tapak Persekutuan</Text>
        </View>
        <Controller
        control={control}
        rules={{ maxLength: 80 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.federationSite && styles.errorInput]}
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="federationSite"
        defaultValue={formDataFromRedux.federationSite}
      />
      </View> 
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
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  labelContainer: {
    flex: 1,
    marginRight: 10,
    alignContent:'center',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 14, 
    fontWeight: '500',
    color: "#B5B3B3",
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
    marginBottom: 10,
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
