import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SimpleLineIcons, Octicons, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import FloatingMenu from '../navigators/FloatingMenu';

const PIC_url ="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"


const styles = StyleSheet.create({
  container: {
    position:'relative',
    flexDirection: 'row',
    padding: 33,
    backgroundColor: '#243FD6',
    borderRadius:50
  },
  textContainer: {
    flex: 1,
    marginTop: 8,
    width: 10,
    color: '#FFFFFF',
  
  },
  title: {
    fontFamily: 'inter',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 8,
    color: '#FFFFFF'
  },
  label: {
    fontFamily: 'inter',
    fontWeight: '600',
    fontSize: 10,
    marginBottom: 2,
    color: '#FFFFFF',
  },
  value: {
    fontFamily: 'inter',
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
    marginTop: -20
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
});

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{
          height: 324,
          backgroundColor: "#243FD6",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 50,
          borderTopLeftRadius:50,
        }}>
        <View style={styles.container}>
          <Image
            source={{
              uri:PIC_url,
            }}
            style={{ width: 64, aspectRatio: 1, borderRadius: 64, marginRight:23}}
            resizeMode='cover' />
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Hello,
            </Text>
            <Text style={styles.label}>
              ID number   
            </Text>
            <Text style={styles.label}>
              Category    
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.title, {marginLeft: -55}]} >Azri</Text>
            <Text style={styles.value}>
                950401-06-5593
            </Text>
            <Text style={styles.value}>
                Peniaga
            </Text>
            </View>
            
        </View>
          <View style={styles.line} />

            <View style={{
              marginLeft: 33,
              marginTop: 10,
              }}>
              <Text style={{
                color: 'white',
                fontFamily: 'inter',
                fontWeight: '400',
                fontSize: 15,
                }}>
                Total Fine
              </Text>
            </View>
          

            <View style={{
                  padding: 10,
                  marginLeft: 23,
                  flexDirection: 'row',
                  alignItems: 'center',  // Add this line to vertically align the content
                }}>
                  <Text style={{
                    color: 'white',
                    fontFamily: 'inter',
                    fontWeight: '600',
                    fontSize: 30,
                    marginRight: 10,  // Adjust the margin to create space between the text and the divider
                  }}>
                    RM 1000.00
                  </Text>
                  <View style={{
                    backgroundColor: 'white',
                    width: 1,
                    height: 20,
                    marginVertical: 4,  // Adjust the vertical margin to position the divider vertically
                  }} />
                  <View style={{ marginLeft: 10 }}>
                    <SimpleLineIcons name='refresh' color="white" size={27} />
                  </View>
                </View>
          
          <View style={styles.circleContainer}>
            <View style={styles.circleWrapper}>
              <View style={styles.circle}>
                <Octicons name="checklist" size={18} color="white" />
              </View>
              <Text style={styles.circleLabel}>Check</Text>
            </View>
            <View style={styles.circleWrapper}>
              <View style={styles.circle}>
                <Fontisto name="wallet" size={18} color="white" />
              </View>
              <Text style={styles.circleLabel}>Pay</Text>
            </View>
            <View style={styles.circleWrapper}>
              <View style={styles.circle}>
                <FontAwesome5 name="percent" size={18} color="white" />
              </View>
              <Text style={styles.circleLabel}>Discount</Text>
            </View>
            <View style={styles.circleWrapper}>
              <View style={styles.circle}>
                <FontAwesome5 name="history" size={18} color="white" />
              </View>
              <Text style={styles.circleLabel}>History</Text>
            </View>
          </View>
        </View>   
        <FloatingMenu/>
      </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen