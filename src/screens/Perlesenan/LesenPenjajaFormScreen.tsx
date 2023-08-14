import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigators/RootNavigator';
import BackButton from '../../components/Shared/BackButton';

const LesenPenjajaFormScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <BackButton/>
          <Text style={styles.headerText}>Borang BP1</Text>
        </View>
        <View style={styles.headerline}></View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    alignItems: 'center',
    justifyContent:'center',
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    flex:1,
    textAlign: 'center',
    left:-25,
  },
  headerline: {
    marginTop: 20,
    height: 2,
    backgroundColor: '#ECECEC',
  },
})
export default LesenPenjajaFormScreen