import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators/RootNavigator';
import FAQcomponent from '../../src/components/Perlesenan/FAQcomponent';

const PIC_url = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=2000&q=60';

const aboutText = "Jabatan Pelesenan is one of division under the Majlis Bandaraya Kuantan. This division is subject to every licensing service for Opening up a business and shoplot in legal right according to Majlis term.";
const address = "3rd Floor of Majlis Bandaraya Kuantan, Jalan Tanah Putih, 25200 Kuantan Pahang";

interface SummonTicket {
  id: string;
  date: string;
  status: string;
  amount: number;
}


const Perlesenan = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackButton = () => {
    navigation.pop();
  }

  const handlePress = (serviceType: String) => {
    switch (serviceType) {
      case 'LesenAnjing':
        navigation.navigate('LesenAnjingForm');
        break;
      case 'LesenPerniagaan':
        navigation.navigate('LesenNiagaForm')
        break;
      case 'LesenPengiklanan':
        break;
      case 'SemakLesen':
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: PIC_url }} style={styles.image} />
          <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
            <Ionicons name='chevron-back-outline' size={20} color="#ADB0B9" />
          </TouchableOpacity>
          <View style={styles.overlayContainer}>
            <Text style={styles.overlayText}>Welcome to Jabatan Perlesenan</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.sectionText}>{aboutText}</Text>
          </View>
          <View>
            <Text style={styles.sectionTitle}>Address</Text>
            <Text style={styles.sectionText}>{address}</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Licence services</Text>
          <TouchableOpacity style={styles.licencePriceContainer}>
            <Text style={styles.licencePrice}>View licence price</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.servicesContainer}>
          <TouchableOpacity style={styles.service} onPress={() => handlePress('LesenAnjing')}>
            <View style={styles.serviceContent}>
              <Ionicons name="paw-sharp" size={40} color="black" />
              <Text style={styles.serviceText}>Lesen Anjing</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service} onPress={() => handlePress('LesenPerniagaan')}>
            <View style={styles.serviceContent}>
              <Entypo name="briefcase" size={40} color="black" />
              <Text style={styles.serviceText}>Lesen Perniagaan</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.servicesContainer}>
          <TouchableOpacity style={styles.service}>
            <View style={styles.serviceContent}>
              <Entypo name="bar-graph" size={40} color="black" />
              <Text style={styles.serviceText}>Lesen Pengiklanan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <View style={styles.serviceContent}>
              <FontAwesome name="check-square-o" size={40} color="black" />
              <Text style={styles.serviceText}>Semak Lesen</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        </View>
        <FAQcomponent />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: 200,
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 25,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 22.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  overlayContainer: {
    position: 'absolute',
    top: 103,
    height: 47,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 16,
  },
  licencePriceContainer: {
    paddingVertical: 8,
  },
  licencePrice: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  servicesContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 20,
    marginTop: 10,
  },
  service: {
    flex: 1,
    height: 149,
    width: 174,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default Perlesenan;
