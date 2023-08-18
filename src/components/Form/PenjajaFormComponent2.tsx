import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native"
import { useForm, Controller } from "react-hook-form"

type FormData = {
    firstName: string;
    lastName: string;
    address: string;
    postcode: string;
    state: string;
    placeOfBirth: string;
    mobileNumber: string;
    citizenship: string;
    gender: string;
    maritalStatus: string;
    businessLocation: string;
  };

const PenjajaFormComponent2: React.FC = () => {
  const { control, handleSubmit,formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); // This will log the form data when submitted
  };

  return (
      <View style={styles.container}>
          <Text style={styles.formTitle}>Maklumat Peribadi Pemohon</Text>
      <Controller
        control={control}
        rules={{ required: true, maxLength: 80 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text style={styles.errorText}>This is required.</Text>}

      <Controller
        control={control}
        rules={{ required: true, maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Last name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName && <Text style={styles.errorText}>This is required.</Text>}

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
            style={styles.input}
            placeholder="Mobile number"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="mobileNumber"
      />
      {errors.mobileNumber && (
        <Text style={styles.errorText}>
          Mobile number is required and should be between 6 and 12 characters.
        </Text>
      )}

      <TextInput style={styles.input} placeholder="Current business location (if any)" />

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
          name="citizenship"
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
          name="gender"
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
          name="maritalStatus"
        />
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
        backgroundColor: '#fff',    // White background
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
        shadowColor: '#000',        // Shadow color
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,         // Opacity of the shadow
        shadowRadius: 4,            // Radius of the shadow
        elevation: 3,  
      },
      input: {
          height: 43,
          flex:1,
        backgroundColor: '#fff',    // White background
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
        shadowColor: '#000',        // Shadow color
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,         // Opacity of the shadow
        shadowRadius: 4,            // Radius of the shadow
        elevation: 3,  
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
});

export default PenjajaFormComponent2;
