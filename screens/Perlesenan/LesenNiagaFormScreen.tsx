import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FAQcomponent from '../../src/components/Perlesenan/FAQcomponent'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigators/RootNavigator'

const LesenNiagaFormScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackButton = () => {
    navigation.pop();
  }
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
            <Ionicons name='chevron-back-outline' size={20} color="#ADB0B9" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Permohonan Lesen perniagaan</Text>
        </View>
        <View style={styles.headerline}></View>
        <FAQcomponent />
      </SafeAreaView>
    </ScrollView>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    position: 'relative',
    top: 10,
  },
  headerline: {
    marginTop: 20,
    height: 2,
    backgroundColor: '#ECECEC',
  },
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
 
})
export default LesenNiagaFormScreen