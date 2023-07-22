import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigators/RootNavigator';



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

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnPress = (label: string) => {



    switch (label) {
      case 'i-CLEAN':
        navigation.navigate('SamanScreen');
        console.log(label);
        break;
      case 'PERLESENAN':
        navigation.navigate('Perlesenan');
        console.log(label);
        break;
      default:
        console.log('other', label);
    }
  };

  const renderButton = (iconName: string, label: string, fontLibrary: string) => {
    const IconComponent = getIconComponent(fontLibrary);

    return (
      <TouchableOpacity style={styles.navBarItem} onPress={() => handleOnPress(label)}>
        <IconComponent name={iconName} size={20} color="#243FD6" />
        <Text style={styles.navBarLabel}>{label}</Text>
      </TouchableOpacity>
    );
  };

  const getIconComponent = (fontLibrary: string) => {
    switch (fontLibrary) {
      case 'FontAwesome5':
        return FontAwesome5;
      case 'MaterialCommunityIcons':
        return MaterialCommunityIcons;
      case 'MaterialIcons':
        return MaterialIcons;
      case 'Ionicons':
        return Ionicons;
      case 'AntDesign':
        return AntDesign;
      default:
        return FontAwesome5;
    }
  };



  return (
    <View style={[styles.floatingNavBar, { height: getNavBarHeight() }]}>
      <Text style={styles.navBarTitle}>Perkhidmatan dalam talian</Text>
      <View style={styles.navBarItems}>
        {renderButton('home', 'i-CLEAN', 'FontAwesome5')}
        {renderButton('receipt-outline', 'E-BILLING', 'Ionicons')}
        {renderButton('comment-alert-outline', 'ADUAN', 'MaterialCommunityIcons')}
        {renderButton('newspaper-outline', 'BOARANG', 'Ionicons')}
        {renderButton('storefront', 'GERAI', 'MaterialIcons')}
        {renderButton('feedback', 'i-TEGUR', 'MaterialIcons')}
      </View>

      {expanded && (
        <View style={{
          marginTop: 19
        }}>
          <View style={styles.navBarItems}>
            {renderButton('idcard', 'PERLESENAN', 'AntDesign')}
            {renderButton('medium', 'SSM', 'FontAwesome5')}
            {renderButton('support-agent', 'HELPDESK', 'MaterialIcons')}
            {renderButton('form-select', 'TENDER', 'MaterialCommunityIcons')}
            <View style={styles.navBarItemHidden}>
              {/* <FontAwesome5 name="cog" size={20} color="#243FD6" />
            <Text style={styles.navBarLabel}>GERAI</Text> */}
            </View>
            <View style={styles.navBarItemHidden}>
              {/* <FontAwesome5 name="cog" size={20} color="#243FD6" />
            <Text style={styles.navBarLabel}>GERAI</Text> */}
            </View>
          </View>
        </View>
      )}

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
    margin: 13,
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
    fontWeight: '500',
    fontStyle: 'normal',
    // fontFamily: 'inter',
    marginBottom: 8,
    marginLeft: 20,
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
  navBarItemHidden: {
    alignItems: 'center',
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: 'white',
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
    marginRight: 16,
  },
});

export default FloatingMenu;
