import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const PIC_url = "https://source.unsplash.com/1024x768/?nature"
const PIC_url2 = "https://source.unsplash.com/1024x768/?water"


const AdvertisingComponent = () => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: PIC_url }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: PIC_url2 }} />
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
    gap: 5,
  },
  imageContainer: {
    position: 'relative', // Required for absolute positioning of the label
  },
  image: {
    width: 155,
    height: 85,
    resizeMode: 'cover',
    borderRadius: 20,
  },
});

export default AdvertisingComponent




