import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigators/RootNavigator';

const BusinessType = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={{ marginBottom: 50 }}>
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Jenis Borang</Text>
      </View>
      <TouchableOpacity style={styles.optionContainer} >
          <Text style={styles.text}>
            Mohon lesen baru perniagaan
          </Text>
          <MaterialCommunityIcons name="download-circle" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer}>
          <Text style={styles.text}>
            BL1     Mohon tapak perniagaan
          </Text>
          <MaterialCommunityIcons name="download-circle" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer}>
          <Text style={styles.text}>
            Mohon permit perniagaan
          </Text>
          <MaterialCommunityIcons name="download-circle" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer}>
          <Text style={styles.text}>
            Daftar lesen PBT
          </Text>
          <MaterialCommunityIcons name="download-circle" size={24} color="black" />
      </TouchableOpacity> 
      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('LesenPenjajaForm')}>
          <Text style={styles.text}>
            BP1     Mohon lesen penjaja
          </Text>
          <MaterialCommunityIcons name="download-circle" size={24} color="black" />
      </TouchableOpacity>  
    </View>
    

  )
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  optionContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    height: 75,
    marginHorizontal: 20,
  },
  text: {
    flex: 1,
    fontWeight: '500',
    fontSize: 13,
  }
})


export default BusinessType