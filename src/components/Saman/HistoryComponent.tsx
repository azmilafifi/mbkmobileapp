import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Row, Table, Rows } from 'react-native-table-component';


interface SummonTicket {
  id: string;
  date: string;
  status: string;
  amount: number;
}

const summonTickets: SummonTicket[] = [
  { id: 'CJR000001', date: '2023-06-28', status: 'Paid', amount: 10 },
  { id: 'CJR000002', date: '2023-06-29', status: 'Unpaid', amount: 5 },
  { id: 'CJR000003', date: '2023-06-30', status: 'Paid', amount: 8 },
  { id: 'CJR000004', date: '2023-06-28', status: 'Paid', amount: 10 },
  { id: 'CJR000005', date: '2023-06-29', status: 'Unpaid', amount: 5 },
  { id: 'CJR000006', date: '2023-06-30', status: 'Paid', amount: 8 },
  { id: 'CJR000007', date: '2023-06-28', status: 'Paid', amount: 10 },
  { id: 'CJR000008', date: '2023-06-29', status: 'Unpaid', amount: 5 },
  { id: 'CJR000009', date: '2023-06-30', status: 'Paid', amount: 8 },
];

const HistoryComponent = () => {


  const tableHead = ['List', 'Date', 'Amount', 'Status'];
    const [activeSection, setActiveSection] = useState<'Individual' | 'Business'>('Individual');

    const toggleSection = () => {
        setActiveSection(activeSection === 'Individual' ? 'Business' : 'Individual');
    };

    const tableData = summonTickets.map((ticket) => [
        ticket.id,
        ticket.date,
        `RM ${ticket.amount}`,
        ticket.status,
    ]);
  
  return (
    <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <TouchableOpacity
                    style={[styles.toggleButton, activeSection === 'Individual' && styles.activeToggleButton]}
                    onPress={toggleSection}
                >
                    <Text style={[styles.toggleText, activeSection === 'Individual' && styles.activeToggleText]}>
                        Individual
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.toggleButton, activeSection === 'Business' && styles.activeToggleButton]}
                    onPress={toggleSection}
                >
                    <Text style={[styles.toggleText, activeSection === 'Business' && styles.activeToggleText]}>Business</Text>
                </TouchableOpacity>
            </View>
            <Table borderStyle={styles.tableBorderStyle}>
                <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
                <Rows data={tableData} textStyle={styles.rowText} />
            </Table>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 50,
      padding: 20,
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
      margin: 6,
      textAlign: 'left',
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
});

export default HistoryComponent