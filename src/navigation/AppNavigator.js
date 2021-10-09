import React from 'react';
import {Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import SecondScreen from '../screens/SecondScreen';
import Profile from '../screens/Profile';
import Dice from '../screens/Dice';
import Ar from './../viro/ar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Basket from '../screens/Basket';
import Auth from '../screens/Auth';
import Registration from '../screens/Registration';

const MainStack = createStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Auth" component={Auth} />
      <MainStack.Screen name="Registration" component={Registration} />
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
      <MainStack.Screen name="Basket" component={Basket} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarStyle: {height: 60, paddingVertical: 5},
          tabBarLabel: () => <Text>Store</Text>,
          tabBarIcon: () => <Icon name="home" color="#FFA900" size={25} />,
        }}
      />
      <Tabs.Screen
        name="Ar"
        component={Ar}
        options={{
          headerShown: false,
          tabBarStyle: {height: 60, paddingVertical: 5},
          tabBarLabel: ({}) => <Text>Ar</Text>,
          tabBarIcon: () => <Icon name="camera" color="#FFA900" size={25} />,
        }}
      />
      <Tabs.Screen
        name="Dice"
        component={Dice}
        options={{
          headerShown: false,
          tabBarStyle: {height: 60, paddingVertical: 5},
          tabBarLabel: ({}) => <Text>Dice</Text>,
          tabBarIcon: () => <Icon name="dice" color="#FFA900" size={25} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarStyle: {height: 60, paddingVertical: 5},
          tabBarLabel: ({}) => <Text>Profile</Text>,
          tabBarIcon: () => <Icon name="user" color="#FFA900" size={25} />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
