import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet,View,Text} from 'react-native'
import React from 'react'
export default function GenderDropDown(props) {
  const {label , ...prop}  = props
  const [items, setItems] = React.useState([
    {label: 'Male', value: 'm'},
    {label: 'Female', value: 'f'},
    {label: 'Others', value: 'o'},
  ]);

  const styles = StyleSheet.create({
    DropdownContianer:{
      backgroundColor:"#ecf0f1",
      marginVertical:9,
    },
    label:{
      color:"black",
      fontSize:15,
      marginBottom:4,
      marginLeft:3,
    },
  })

  return (
    <View style={styles.DropdownContianer}>
    <Text style={styles.label}>{label}</Text>
      <DropDownPicker
      dropDownContainerStyle={{
          backgroundColor: "#ecf0f1",
          borderWidth:1,borderColor:"lightgrey"
      }}
      listItemContainerStyle={{borderTopWidth:1,borderTopColor:"lightgrey",borderBottomWidth:1,borderBottomColor:"lightgrey"}}
      dropDownDirection="TOP"
      {...props}
      items={items}
      placeholderStyle={{color:"grey",fontSize:15}}
      placeholder="Select Gender"
      style={{backgroundColor:"#ecf0f1",borderColor:"lightgrey",borderWidth:2,borderRadius:10}}
      />
    </View>
  );
}