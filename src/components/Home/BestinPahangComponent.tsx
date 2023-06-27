import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const PIC_url = "https://source.unsplash.com/1024x768/?nature"
const PIC_url2 = "https://source.unsplash.com/1024x768/?water"
const PIC_url3 = "https://source.unsplash.com/1024x768/?tree"

const BestinPahangComponent = () => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image blurRadius={1} style={styles.image} source={{ uri: PIC_url }} />
          <Text style={styles.label}>Vacation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image blurRadius={1} style={styles.image} source={{ uri: PIC_url2 }} />
          <Text style={styles.label}>FnB</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image blurRadius={1} style={styles.image} source={{ uri: PIC_url3 }} />
          <Text style={styles.label}>Tourism</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    gap: 7,
  },
  imageContainer: {
    position: 'relative', // Required for absolute positioning of the label
  },
  image: {
    width: 95,
    height: 48,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  label: {
    position: 'absolute',
    top: 17,
    left: 0,
    right: 0,
    bottom: 0,
    fontSize: 11,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default BestinPahangComponent