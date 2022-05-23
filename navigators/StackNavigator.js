import React from 'react'
import DrawerNavigator from './DrawerNavigator'
import { createStackNavigator } from '@react-navigation/stack'
import StackHomeScreen from '../screens/stack/StackHomeScreen'
import Login from '../screens/stack/Login'
import ApplyForAdmission from '../screens/stack/ApplyForAdmission'
import UnderReview from '../screens/stack/UnderReview'
import Logo from '../screens/stack/Logo'
const Stack = createStackNavigator()
const StackNavigator = () => {

const [splashScreen,setSplashScreen] = React.useState(true)

React.useEffect(()=>{
  setTimeout(()=>{
    setSplashScreen(false)
  },3000)
},[])

  return (
    <Stack.Navigator initialRouteName='logo'>
        {splashScreen && <Stack.Screen name="logo" options={{headerShown:false}} component={Logo} /> }
        <Stack.Screen name="stackHome" options={{title:"Code With SadiQ"}} component={StackHomeScreen} />
        <Stack.Screen name="login" options={{title:"Login"}} component={Login} />
        <Stack.Screen name="apply" options={{title:"Apply For Admission"}} component={ApplyForAdmission} />
        <Stack.Screen name="review" options={{title:"Form Under Review"}} component={UnderReview} />
        <Stack.Screen options={{headerShown:false}} name="drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  )
}

export default StackNavigator