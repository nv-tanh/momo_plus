/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'react-native-elements';

import HomeScreen from '../scenes/Home/index';
import SearchingScreen from '../scenes/Searching/index';
import MapsScreen from '../scenes/Maps/index';
import UserScreen from '../scenes/User/index';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" type="entypo" size={20} color={tintColor} />
      ),
    },
  },
);

const SearchingStack = createStackNavigator(
  {
    SearchingScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="search1" type="antdesign" size={20} color={tintColor} />
      ),
    },
  },
);

const UserStack = createStackNavigator(
  {
    UserScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="user-circle"
          type="font-awesome"
          size={20}
          color={tintColor}
        />
      ),
    },
  },
);

const MapsStack = createStackNavigator(
  {
    MapsScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="location-pin" type="entypo" size={20} color={tintColor} />
      ),
    },
  },
);

const tabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchingStack,
    Maps: MapsStack,
    User: UserStack,
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#808080',
    },
  },
);

const Drawer = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Drawer Item 1</Text>
    <Text>Drawer Item 2</Text>
  </View>
);

const drawer = createDrawerNavigator(
  {
    Initial: tabNavigator,
  },
  {
    contentComponent: Drawer,
  },
);

export default drawer;
