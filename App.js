import "react-native-gesture-handler";
import React from 'react'
import StackNavigator from './navigators/StackNavigator';
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  )
}

export default App