import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons'
const FAQcomponent = () => {
    
  return (
        <View style={styles.FAQcontainer}>
          <View style={styles.FAQsection}>
            <Text style={styles.FAQtext}>Cara memohon?</Text>
            <TouchableOpacity>
              <FontAwesome5 name="plus" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.FAQsection}>
            <Text style={styles.FAQtext}>Dokumen yang perlu dibawa</Text>
            <TouchableOpacity>
              <FontAwesome5 name="plus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
    FAQcontainer: {
        marginHorizontal: 20,
        flexDirection: 'column',
      },
      FAQsection: {
        marginTop: 20,
        height: 63,
        borderRadius: 15,
        borderColor: "#D8DFE1",
        borderWidth: 2,
        padding: 20,
        flex: 2,
        flexDirection: 'row'
      },
      FAQtext: {
        flex: 1,
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 14,
      },
})

export default FAQcomponent