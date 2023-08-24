import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigators/RootNavigator';
import BackButton from '../../components/Shared/BackButton';
import PenjajaFormComponent1 from '../../components/Form/PenjajaFormComponent1';
import PenjajaFormComponent2 from '../../components/Form/PenjajaFormComponent2';
import { useState } from 'react';
import PenjajaFormComponent3 from '../../components/Form/PenjajaFormComponent3';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {resetForm, updateField, updateFields} from '../../slice/formslice';
import {FormControllerService, FormDTO} from '../../openapi/codegen';
import PenjajaFormComponent4 from '../../components/Form/PenjajaFormComponent4';

const LesenPenjajaFormScreen = () => {
  const navigation   = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [currentStep, setCurrentStep] = useState(1);
  
  const formState = useAppSelector(state => state.form);

  const dispatch = useAppDispatch();
  
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleDataSubmit = (data: FormDTO) => {
    const fieldKeys = Object.keys(data) as Array<keyof FormDTO>;
/*    fieldKeys.forEach((field) => {
      dispatch(updateField({ key: field, value: data[field] }));
    });*/
    dispatch(updateFields(fieldKeys.map(field => ({ key: field, value: data[field] }))));

    console.log(data)
    console.log(formState)
    if (currentStep < 4){
      handleNext();
    } else {
      // below might work, cant think of a better way other than having the submit code in formSlice
      // FormControllerService.submitFormUsingPost({ formDto: {...formState, ...fieldKeys.map(field => ({ [field] : data[field] }))}});
      dispatch(resetForm());
      navigation.navigate('FormPayment');
    }
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={styles.headerText}>Borang BP1</Text>
      </View>
      <View style={styles.headerline} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.buttonContainer}>
          {currentStep > 1 && (
            <Button title="Previous" onPress={handlePrevious} />
          )}
          {/* {currentStep < 2 && (
            <Button title="Next" onPress={handleNext} />
          )} */}
        </View>
        {currentStep === 1 && <PenjajaFormComponent1 onDataSubmit={handleDataSubmit}/>}
        {currentStep === 2 && <PenjajaFormComponent2 onDataSubmit={handleDataSubmit} />}
        {currentStep === 3 && <PenjajaFormComponent3 onDataSubmit={handleDataSubmit} />}
        {currentStep === 4 && <PenjajaFormComponent4 onDataSubmit={handleDataSubmit} />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  headerline: {
    height: 2,
    backgroundColor: '#ECECEC',
    marginTop: 10,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 20,
  },buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default LesenPenjajaFormScreen;
