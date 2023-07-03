import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const PIC_url = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
const PIC_url2 = "https://images.unsplash.com/photo-1549154425-7b519f2b92d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsYXlzaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"


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




