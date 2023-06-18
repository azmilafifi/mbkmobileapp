import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const FloatingMenu = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        LayoutAnimation.configureNext({
          ...LayoutAnimation.Presets.easeInEaseOut,
          duration: 400, // Customize the animation duration here (in milliseconds)
        });
      }, [expanded]);

    const getNavBarHeight = () => {
        return expanded ? 181 : 109; 
    };
    
  return (
    <View style={[styles.floatingNavBar, { height: getNavBarHeight() }]}>
      <Text style={styles.navBarTitle}>MBK Service</Text>
      <View style={styles.navBarItems}>
        <TouchableOpacity style={styles.navBarItem}>
          <FontAwesome5 name="home" size={20} color="#243FD6" />
          <Text style={styles.navBarLabel}>i-CLEAN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarItem}>
          <FontAwesome5 name="search" size={20} color="#243FD6" />
          <Text style={styles.navBarLabel}>E-BILLING</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarItem}>
          <FontAwesome5 name="bell" size={20} color="#243FD6" />
          <Text style={styles.navBarLabel}>ADUAN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarItem}>
          <FontAwesome5 name="user" size={20} color="#243FD6" />
          <Text style={styles.navBarLabel}>BORANG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarItem}>
          <FontAwesome5 name="cog" size={20} color="#243FD6" />
          <Text style={styles.navBarLabel}>GERAI</Text>
        </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.viewAllButton} onPress={handleExpand}>
        <Text style={styles.viewAllText}>{expanded ? 'Hide' : 'View All'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    floatingNavBar: {
        position: 'relative',
        padding: 16,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: 'white',
        marginTop: -40,
        borderRadius: 20,
        height: 109,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 5,
    },
      navBarTitle: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft:20,
        textAlign: 'justify',
      },
      navBarItems: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      navBarItem: {
        alignItems: 'center',
        width: 42,
        height: 42,
        borderRadius: 21,
        borderWidth: 1,
        borderColor: '#243FD6',
        padding: 10,
      },
      navBarLabel: {
        marginTop: 12,
        color: '#243FD6',
        fontSize: 7,
        textAlign: 'center',
        width: 60,
    },
    viewAllButton: {
        position: 'absolute',
        top: 10,
        right: 10,
      },
      viewAllText: {
        fontSize: 10,
        fontFamily: 'arimo',
          color: 'rgba(0, 0, 0, 0.4)',
          marginTop: 7,
          marginRight:16,
      },
});

export default FloatingMenu;
