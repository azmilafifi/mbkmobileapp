import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigators/RootNavigator'
const PIC_url= 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=2000&q=60'

interface SummonTicket {
  id: string;
  date: string;
  status: string;
  amount: number;
}

const Perlesenan = () => {
  
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackButton = () => {
    navigation.pop()
  }

  return (
    <SafeAreaView>
      <View style={styles.screenContainer}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBackButton}>
              <View style={styles.backContainer}>
                <View style={styles.button} />
                <Ionicons name='chevron-back-outline' size={20} color="#ADB0B9" />
              </View>
            </TouchableOpacity>
          </View>
          <Image source={{uri:PIC_url}} style={styles.image}/>
        </View>
        
          <View>
            <Text>Welcome to Jabatan Perlesenan</Text>
          </View>
          
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screenContainer:{
    borderRadius:20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backContainer: {
    position: 'relative',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 22.5,
  },
  image:{
    height: 200,
  },
})
export default Perlesenan