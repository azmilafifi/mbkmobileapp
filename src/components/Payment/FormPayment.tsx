import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Button, RadioButton } from 'react-native-paper';
import BackButton from '../Shared/BackButton';
import { SafeAreaView } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigators/RootNavigator';
import { useAppDispatch } from '../../hooks';
import { resetForm } from '../../slice/formslice';


const FormPayment = () => {

  const [selectedMethod, setSelectedMethod] = useState('fpx');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  
  const handlePayment = () => {
        dispatch(resetForm());
        navigation.navigate('SuccessPayment')
      };
    
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <BackButton />
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Payment Checkout</Text>
          </View>
        </View>
        <View style={styles.paymentInfoContainer}>
          <Text style={styles.totalPriceText}>Total Price:</Text>
          <Text style={styles.amount}>RM 100.00</Text>
        </View>
        <View style={styles.infoContainer}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Invoice</Text>
                <View style={styles.invoiceDetails}>
                    <Text>Payment details and information here.</Text> 
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Payment Method</Text>
                <TouchableOpacity style={styles.radioContainer} onPress={() => setSelectedMethod('fpx')}>
                <RadioButton
                    value="fpx"
                    status={selectedMethod === 'fpx' ? 'checked' : 'unchecked'}
                    color='#243FD6' 
                    onPress={() => setSelectedMethod('fpx')}
                />
                <Text style={styles.paymentText}>FPX</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.radioContainer} onPress={() => setSelectedMethod('creditCard')}>
                    <RadioButton
                      value="creditCard"
                      status={selectedMethod === 'creditCard' ? 'checked' : 'unchecked'}
                      color='#243FD6'
                      onPress={() => setSelectedMethod('creditCard')}
                    />
                    <Text style={styles.paymentText}>Credit Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.radioContainer} onPress={() => setSelectedMethod('pbtpay')}>
                    <RadioButton
                        value="pbtpay"
                        status={selectedMethod === 'pbtpay' ? 'checked' : 'unchecked'}
                        color='#243FD6' 
                        onPress={() => setSelectedMethod('pbtpay')}
                    />
                    <Text style={styles.paymentText}>PBTpay</Text>
                </TouchableOpacity>
            </View>
            <Button style={styles.button} buttonColor='#243FD6' mode="contained" onPress={handlePayment}>Make Payment</Button>  
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#243FD6',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  infoContainer: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    },
    invoiceDetails: {
        height: 162,
        borderWidth: 2,
        borderColor: '#EEEEEE',
        borderRadius: 10,
        padding:10,
  },
  backButton: {
    marginRight: 20,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  paymentInfoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  totalPriceText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '500',
  },
  amount: {
    fontSize: 50,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#EEEEEE',
        borderWidth:2,
        borderRadius: 10,
        height:57,
    },
    paymentText: {
        fontSize: 15,
        fontWeight: '500',
        color:'#878787',
    },
    button: {
        height:43,
        marginTop: 20,
        borderRadius: 15,
        justifyContent: 'center',
      },
});

export default FormPayment;
