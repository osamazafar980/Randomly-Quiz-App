import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import QuestionScreen from './screens/QuestionScreen'
import ConfigScreen from './screens/ConfigScreen'


const stackNavigator = createStackNavigator(
  {
    Search:HomeScreen,
    Question:QuestionScreen,
    Config:ConfigScreen
  },{
    initialRouteName: "Search",

    defaultNavigationOptions: {
      headerTitleStyle: { alignSelf: 'center' },
      title: "Randomly Quiz App"
    }
  }
);



export default createAppContainer(stackNavigator);