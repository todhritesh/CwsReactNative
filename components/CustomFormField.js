import { View, Text , StyleSheet ,TextInput  } from 'react-native'
import React from 'react'

const CustomFormField = (props) => {
  const {label,...prop} = props
const styles = StyleSheet.create({
    InputContainer:{
        backgroundColor:"#ecf0f1",
        marginVertical:10
    },
    label:{
      color:"black",
      fontSize:15,
      marginBottom:4,
      marginLeft:3,
    },
    input:{
        borderWidth:2,
        borderColor:"lightgrey",
        borderRadius:10,
        paddingVertical:0,
        fontSize:18,
        color:"black",
        paddingLeft:10
    }
})
  return (
    <View style={styles.InputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput placeholderTextColor="grey"  height={40} {...prop} style={styles.input} />
    </View>
  )
}

export default CustomFormField