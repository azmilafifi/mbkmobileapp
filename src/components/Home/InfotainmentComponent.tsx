import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';


const infoPIC_url = "https://images.unsplash.com/photo-1572358899655-f63ece97bfa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
const InfotainmentComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>InfotainmentComponent</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: infoPIC_url }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    height: 78,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    // fontFamily: 'inter',
  },
  imageContainer: {},
  image: {
    width: 109,
    height: 78,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: -10,
  },
});

export default InfotainmentComponent;
