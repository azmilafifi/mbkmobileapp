import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators/RootNavigator';

const PIC_url = "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

interface SummonTicket {
  id: string;
  date: string;
  status: string;
  amount: number;
}

const summonTickets: SummonTicket[] = [
  { id: 'CJR000001', date: '2023-06-28', status: 'Paid', amount: 100 },
  { id: 'CJR000002', date: '2023-06-29', status: 'Unpaid', amount: 50 },
  { id: 'CJR000003', date: '2023-06-30', status: 'Paid', amount: 80 },
  { id: 'CJR000004', date: '2023-06-28', status: 'Paid', amount: 100 },
  { id: 'CJR000005', date: '2023-06-29', status: 'Unpaid', amount: 50 },
  { id: 'CJR000006', date: '2023-06-30', status: 'Paid', amount: 80 },
  { id: 'CJR000007', date: '2023-06-28', status: 'Paid', amount: 100 },
  { id: 'CJR000008', date: '2023-06-29', status: 'Unpaid', amount: 50 },
  { id: 'CJR000009', date: '2023-06-30', status: 'Paid', amount: 80 },
];

const PayScreen = () => {

  const [activeSection, setActiveSection] = useState<'Individual' | 'Business'>('Individual');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const toggleSection = () => {
    setActiveSection(activeSection === 'Individual' ? 'Business' : 'Individual');
  };

  const tableData = summonTickets
    .filter((ticket) => ticket.status == 'Unpaid')
    .map((ticket) => [
      ticket.id,
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{`RM ${ticket.amount}`}</Text>
        <Text style={styles.dateText}>{ticket.date}</Text>
      </View>,
    ]);

  const handleBackButton = () => {
    navigation.pop()
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackButton}>
            <View style={styles.backContainer}>
              <View style={styles.button} />
              <Ionicons name='chevron-back-outline' size={20} color="#ADB0B9" />
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, activeSection === 'Individual' && styles.activeToggleButton]}
            onPress={toggleSection}
          >
            <Text style={[styles.toggleText, activeSection === 'Individual' && styles.activeToggleText]}>Individual</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, activeSection === 'Business' && styles.activeToggleButton]}
            onPress={toggleSection}
          >
            <Text style={[styles.toggleText, activeSection === 'Business' && styles.activeToggleText]}>Business</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headercontainer}>
          <Image
            source={{
              uri: PIC_url,
            }}
            style={{ width: 64, height: 64, borderRadius: 64, marginRight: 23, marginTop: 10 }}
            resizeMode='cover'
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.label}>ID number</Text>
            <Text style={styles.label}>Category</Text>
            <Text style={styles.label}>Date</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.title, { marginLeft: -55 }]}>Azri</Text>
            <Text style={styles.value}>950401-06-5593</Text>
            <Text style={styles.value}>Peniaga</Text>
            <Text style={styles.value}>10 Dec 2022 | 09.30 am</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.totalFineContainer}>
          <Text style={styles.totalFineText}>Total fine</Text>
          <Text style={styles.totalFineValue}>RM 150</Text>
        </View>

        <View style={styles.tableContainer}>
          <Table borderStyle={styles.tableBorderStyle}>
            <Row
              data={['List', 'Amount']}
              style={styles.head}
              textStyle={styles.headText}
            />
            <Rows
              data={tableData}
              textStyle={[styles.rowText, styles.leftAlignText]}
            />
          </Table>
        </View>

        <View style={styles.line} />

        <View style={styles.rowContainer}>
          <Text style={styles.labelText}>Subtotal:</Text>
          <Text style={styles.valueText}>RM 150.00</Text>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.labelText}>Discount available:</Text>
          <Text style={styles.valueText}>RM 50.00</Text>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.labelText}>Total:</Text>
          <Text style={styles.valueText}>Rm 100.00</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.rowContainer}>
          <Ionicons name='qr-code-outline' size={54}></Ionicons>
          <Text >No Kompaun</Text>
        </View>

      </View>

      <View style={styles.paycontainer}>
        <View style={styles.rowContainer}>
          <Text >Request for discount</Text>
          <TouchableOpacity>
            <View style={styles.paybillcontainer}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Pay bill</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 20,
    borderRadius: 30,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backContainer: {
    position: 'relative',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 22.5,
  },
  headercontainer: {
    position: 'relative',
    flexDirection: 'row',
    paddingHorizontal: 33,
    borderRadius: 50
  },
  textContainer: {
    flex: 1,
    marginTop: 8,
    width: 10,
    color: 'black',
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 8,
    color: 'black'
  },
  label: {
    fontWeight: '400',
    fontSize: 10,
    color: '#494B50',
  },
  value: {
    fontWeight: '600',
    fontSize: 10,
    color: '#494B50',
    marginLeft: -45,
  },
  line: {
    height: 1,
    backgroundColor: '#ADB0B9',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 29,
    width: 208,
    borderRadius: 20,
    backgroundColor: '#E9ECF3',
    alignSelf: 'center',
    paddingHorizontal: 5,
    marginTop: 10,
  },
  toggleButton: {
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 16,
    textAlign: 'center',
  },
  activeToggleButton: {
    backgroundColor: 'white',
  },
  activeToggleText: {
    color: 'black',
  },
  amountContainer: {
    alignItems: 'flex-start',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#243FD6',
  },
  dateText: {
    fontSize: 10,
    fontWeight: '400',
    color: 'black',
  },
  tableContainer: {
    backgroundColor: 'transparent',
    marginTop: 10,
    paddingHorizontal: 30
  },
  tableBorderStyle: {
    borderWidth: 0,
  },
  head: {
    height: 40,
  },
  headText: {
    margin: 6,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  rowText: {
    fontWeight: '600',
    fontSize: 15,
    color: 'black',
    textAlign: 'right',
  },
  leftAlignText: {
    textAlign: 'left',
  },
  totalFineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  totalFineText: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  totalFineValue: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    marginTop: 10,
  },
  labelText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#ADB0B9',
  },
  valueText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#ADB0B9',
  },

  paycontainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 25,
    marginTop: 20,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },

  paybillcontainer: {
    backgroundColor: '#243FD6',
    borderRadius: 20,
    height: 54,
    width: 141,
    alignItems: 'center',
    paddingVertical: 15,
  }

});
export default PayScreen