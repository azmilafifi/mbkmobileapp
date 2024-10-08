import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FAQcomponent from '../../components/Perlesenan/FAQcomponent'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../navigators/RootNavigator'
import BusinessType from '../../components/Perlesenan/BusinessType'
import BackButton from '../../components/Shared/BackButton'

const LesenNiagaFormScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <BackButton/>
          <Text style={styles.headerText}>Permohonan Lesen perniagaan</Text>
        </View>
        <View style={styles.headerline}></View>
        <BusinessType />
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
  
})
export default LesenNiagaFormScreen