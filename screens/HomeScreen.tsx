import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingMenu from '../src/components/Home/FloatingMenu';
import AdvertisingComponent from '../src/components/Home/AdvertisingComponent';
import NewsComponent from '../src/components/Home/NewsComponent';
import InfotainmentComponent from '../src/components/Home/InfotainmentComponent';
import BestinPahangComponent from '../src/components/Home/BestinPahangComponent';

const PIC_url =
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';

const styles = StyleSheet.create({
  headerContainer: {
    height: 234,
    backgroundColor: 'white',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    paddingTop: 30,
    paddingBottom: 10,
  },
  imageContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  textContainer: {
    flex: 1,
    marginRight: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'inter',
    marginBottom: 8,
    lineHeight: 21,
  },
  description: {
    fontSize: 9,
    fontWeight: '400',
    fontFamily: 'inter',
    lineHeight: 11,
  },
  floatingMenuContainer: {
    marginTop: -50, // Adjust the margin top as needed
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'inter',
    marginBottom: 10,
  },
  sectionImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  carouselContainer: {
    marginTop: 20,
  },
  carouselImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});



const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to MBK mobile app</Text>
            <Text style={styles.description}>
              The best place to find the government services and information simpler, clearer and faster
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: PIC_url }} style={styles.image} resizeMode="cover" />
          </View>
        </View>
        <View style={styles.floatingMenuContainer}>
          <FloatingMenu />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Breaking News</Text>
          <NewsComponent />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Infotainment</Text>
          <InfotainmentComponent />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>The best in Pahang</Text>
          <BestinPahangComponent />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Advertising</Text>
          <AdvertisingComponent />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
