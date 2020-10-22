import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import BrowseScreen from './src/screens/BrowseScreen';
import ConcertScreen from './src/screens/ConcertScreen';
import HomeScreen from './src/screens/HomeScreen';
import LiveShowsScreen from './src/screens/LiveShowsScreen';
import SportsScreen from './src/screens/SportsScreen';
import TicketScreen from './src/screens/TicketScreens';


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    evenCategoryFlow: createStackNavigator({
      Concert: ConcertScreen,
      LiveShow: LiveShowsScreen,
      Sports: SportsScreen
    }),
    Account: AccountScreen,
    Browse: BrowseScreen,
    Home: HomeScreen,
    Tickets: TicketScreen
  }),
});

export default createAppContainer(switchNavigator);

