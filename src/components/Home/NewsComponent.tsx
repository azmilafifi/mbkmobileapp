import React from 'react';
import { View,  Image, StyleSheet } from 'react-native';

const newsPic_URL = 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
const PIC_url = "https://source.unsplash.com/1024x768/?nature"
const PIC_url2 = "https://source.unsplash.com/1024x768/?water"
const PIC_url3 = "https://source.unsplash.com/1024x768/?tree"

const NewsComponent = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: newsPic_URL }} />
      {/* <Image style={styles.image} source={{ uri: PIC_url }} />
          <Image style={styles.image} source={{ uri: PIC_url2 }} />  */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    marginHorizontal: 20,
    
  },
  image: {
    width: '100%',
    height: 169,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default NewsComponent;
