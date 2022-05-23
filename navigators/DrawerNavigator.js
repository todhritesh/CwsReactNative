import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import {Text} from 'react-native'
import CoursesScreen from '../screens/drawer/CoursesScreen';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName='courses'>
      <Drawer.Screen name="courses" options={{title:"Courses"}} component={CoursesScreen} />
    </Drawer.Navigator>
  );
}