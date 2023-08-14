import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigators/RootNavigator';
import { Ionicons } from '@expo/vector-icons'

const BackButton = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackButton = () => {
    navigation.pop();
  }
    return (
        <View>
            <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
            <Ionicons name='chevron-back-outline' size={20} color="#ADB0B9" />
          </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    backButton: {
      width: 45,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 22.5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
export default BackButton