/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

// import TabBarIcon from '../components/TabBarIcon';
import Home from '../scenes/Home/index';

const HomeStack = createStackNavigator({
  Home: Home,
});

// ActiveStack.navigationOptions = {
//   tabBarLabel: 'Active',
//   tabBarIcon: ({focused}) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

const tabNavigator = createBottomTabNavigator({
  HomeStack: HomeStack,
});

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
