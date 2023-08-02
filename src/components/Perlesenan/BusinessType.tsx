import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BusinessType = () => {
  return (
    <View style={{ marginBottom: 50 }}>
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Type of business licence</Text>
      </View>
      <TouchableOpacity style={styles.optionContainer}>
          <Text style={styles.text}>
            Mohon lesen baru perniagaan
          </Text>
          <MaterialCommunityIcons name="download-circle" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer}>
          <Text style={styles.text}>
            Mohon tapak perniagaan
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
    marginTop:20,
    marginHorizontal: 20,
    backgroundColor: 'white',
    height: 75,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontWeight: '500',
    fontSize: 13,
  }
})


export default BusinessType