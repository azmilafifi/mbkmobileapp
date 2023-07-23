import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text,TouchableOpacity } from 'react-native';


const newsPic_URL =
  'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
const PIC_url =
  'https://images.unsplash.com/photo-1611315939887-bcca57767326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGt1YW50YW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';
const PIC_url2 =
  'https://images.unsplash.com/photo-1582040949178-7b20177f474d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGt1YW50YW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';
const PIC_url3 = 'https://source.unsplash.com/1024x768/?tree';

const NewsComponent = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: newsPic_URL }} />
            <View style={styles.textContainer}>
              <View style={{
                backgroundColor: '#243FD6',
                width: 60,
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                left: 10,
              }}>
                <Text style={styles.title}>News </Text>
                </View>
            <Text style={styles.description}>Weather Today</Text>
          </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: PIC_url }} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>News</Text>
            <Text style={styles.description}>Tourism</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: PIC_url2 }} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>News</Text>
            <Text style={styles.description}>Economy</Text>
          </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 30,
    gap: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 300,
    height: 169,
    resizeMode: 'cover',
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    position: 'absolute',
    width: 300,
    height:169,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
    left: 10,
    top:1,
  },
  description: {
    color: 'white',
    fontSize: 13,
    top: 80,
    left: 20,
  },
});

export default NewsComponent;