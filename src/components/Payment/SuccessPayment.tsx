import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigators/RootNavigator';

const SuccessPayment = () => {
    const title = 'Borang BP1 was successfully sent'
    const text = 'Your borang has been sent to Pelesenan Department in MBK. We will response you as quick as possible, Thank you'
    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
   
    const handleButton = () => {
        navigation.popToTop()
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/SuccessPay.png')} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
            <Button style= {styles.button}  buttonColor='#243FD6' mode='contained' onPress={handleButton}> Back to home</Button>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
      image: {
          width: 200,
      },
    textContainer: {
      flexDirection: 'column',
      alignItems: 'center',
        marginTop: 20,
      paddingHorizontal: 50,
      },
      title:{
          fontSize: 26,
          fontWeight: '500',
          textAlign: 'center',
          marginBottom: 10,
      },
      text: {
        color: '#B5B3B3',
        fontSize: 15,
        textAlign: 'center',
      },
      button: {
        height:43,
        marginTop: 20,
        borderRadius: 20,
        justifyContent: 'center',
      },
  });
  
  export default SuccessPayment;