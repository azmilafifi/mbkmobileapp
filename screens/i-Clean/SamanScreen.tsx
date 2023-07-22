import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons, Octicons, Fontisto, FontAwesome5, Entypo } from '@expo/vector-icons';
import CheckComponent from '../../src/components/Saman/CheckComponent';
import HistoryComponent from '../../src/components/Saman/HistoryComponent';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators/RootNavigator';

const PIC_url = "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";



const SamanScreen = () => {
  const [selectedSection, setSelectedSection] = useState('check'); // Default selection is 'pay'

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderSection = () => {
    switch (selectedSection) {
      case 'home':
        navigation.pop();
        setSelectedSection('check')
        break;
      case 'pay':
        navigation.navigate("PayScreen");
        setSelectedSection('check')
        break;
      case 'check':
        return <CheckComponent />;
      case 'discount':
        navigation.navigate("PayScreen");
        setSelectedSection('check')
        break;
      case 'history':
        return <HistoryComponent />;
      default:
        return null;
    }
  };



  return (
    <SafeAreaView>
      <View style={{
        height: 300,
        backgroundColor: "#243FD6",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
      }}>
        <View style={styles.container}>
          <Image
            source={{
              uri: PIC_url,
            }}
            style={{ width: 64, aspectRatio: 1, borderRadius: 64, marginRight: 23 }}
            resizeMode='cover'
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.label}>ID number</Text>
            <Text style={styles.label}>Category</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.title, { marginLeft: -55 }]}>Azri</Text>
            <Text style={styles.value}>950401-06-5593</Text>
            <Text style={styles.value}>Peniaga</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={{ marginLeft: 33, marginTop: 10 }}>
          <Text style={{
            color: 'white',
            fontWeight: '400',
            fontSize: 15,
          }}>Total Fine</Text>
        </View>
        <View style={{
          padding: 10,
          marginLeft: 23,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Text style={{
            color: 'white',
            fontWeight: '600',
            fontSize: 30,
            marginRight: 10,
          }}>RM 1000.00</Text>
          <View style={{
            backgroundColor: 'white',
            width: 1,
            height: 20,
            marginVertical: 4,
          }} />
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <SimpleLineIcons name='refresh' color="white" size={27} />
          </TouchableOpacity>
        </View>
        <View style={styles.circleContainer}>
          <View style={styles.circleWrapper}>
            <TouchableOpacity
              onPress={() => setSelectedSection('home')}
              style={styles.circle}>
              <Entypo name="home" size={18} color="white" />
            </TouchableOpacity>
            <Text style={styles.circleLabel}>Home</Text>
          </View>
          <View style={styles.circleWrapper}>
            <TouchableOpacity
              onPress={() => setSelectedSection('check')}
              style={styles.circle}>
              <Octicons name="checklist" size={18} color="white" />
            </TouchableOpacity>
            <Text style={styles.circleLabel}>Check</Text>
          </View>
          <View style={styles.circleWrapper}>
            <TouchableOpacity
              onPress={() => setSelectedSection('pay')}
              style={styles.circle}>
              <Fontisto name="wallet" size={18} color="white" />
            </TouchableOpacity>
            <Text style={styles.circleLabel}>Pay</Text>
          </View>
          <View style={styles.circleWrapper}>
            <TouchableOpacity
              onPress={() => setSelectedSection('discount')}
              style={styles.circle}>
              <FontAwesome5 name="percent" size={18} color="white" />
            </TouchableOpacity>
            <Text style={styles.circleLabel}>Discount</Text>
          </View>
          <View style={styles.circleWrapper}>
            <TouchableOpacity
              onPress={() => setSelectedSection('history')}
              style={styles.circle}>
              <FontAwesome5 name="history" size={18} color="white" />
            </TouchableOpacity>
            <Text style={styles.circleLabel}>History</Text>
          </View>
        </View>
      </View>

      <View style={styles.scrollableContent}>
        <ScrollView style={styles.scrollableSection}>
          {renderSection()}
        </ScrollView>
      </View>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    padding: 33,
    borderRadius: 50
  },
  textContainer: {
    flex: 1,
    marginTop: 8,
    width: 10,
    color: '#FFFFFF',
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 8,
    color: '#FFFFFF'
  },
  label: {
    fontWeight: '600',
    fontSize: 10,
    color: '#FFFFFF',
  },
  value: {
    fontWeight: '600',
    fontSize: 10,
    color: '#FFFFFF',
    marginLeft: -45,
  },
  line: {
    height: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginTop: -20,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    marginTop: 5,
    paddingHorizontal: 33,
  },
  circleWrapper: {
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
  },
  circleLabel: {
    marginTop: 5,
    color: 'white',
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
  },
  scrollableSection: {
    paddingBottom: 100,
    marginTop: 10,
  },
  scrollableContent: {
    flexGrow: 1,
  },
});

export default SamanScreen;
