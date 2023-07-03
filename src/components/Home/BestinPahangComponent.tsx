import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const PIC_url = "https://images.unsplash.com/photo-1596120236172-231999844ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
const PIC_url2 = "https://images.unsplash.com/photo-1611601184963-9d1de9b79ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGFuZCUyMGJldmVyYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
const PIC_url3 = "https://images.unsplash.com/photo-1596374868225-ffa16761a7df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudGFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"

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