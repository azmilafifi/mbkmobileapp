import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigators/RootNavigator';
import BackButton from '../../components/Shared/BackButton';
import PenjajaFormComponent1 from '../../components/Form/PenjajaFormComponent1';
import PenjajaFormComponent2 from '../../components/Form/PenjajaFormComponent2';
import { useState } from 'react';

const LesenPenjajaFormScreen = () => {
  const navigation   = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
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
          {currentStep < 2 && (
            <Button title="Next" onPress={handleNext} />
          )}
        </View>
        {currentStep === 1 && <PenjajaFormComponent1 />}
        {currentStep === 2 && <PenjajaFormComponent2 />}
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
