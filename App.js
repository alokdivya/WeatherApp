import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Ionicons} from '@expo/vector-icons'
import { TextInput,Card,List} from 'react-native-paper';
import SearchScreen from './components/SearchScreen';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';

const TabNavigator = createBottomTabNavigator({
  "current city": HomeScreen,
  "select city": SearchScreen,
},

{

  defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;

            if (route.name === 'current city') {
              iconName = 'md-cloud';
            } else if (route.name === 'select city') {
              iconName = 'md-options';
            }

            return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
);

export default createAppContainer(TabNavigator);