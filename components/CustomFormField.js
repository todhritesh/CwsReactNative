import { View, Text , StyleSheet ,TextInput  } from 'react-native'
import React,{forwardRef} from 'react'

const CustomFormField = forwardRef((props,ref) => {
  const {label,disabled,...prop} = props
  const disable = disabled==undefined || !disabled ? false : true ;
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
        color: disable ? "grey" : "black",
        paddingLeft:10,
        backgroundColor: disable ? "#c8d6e5":"#ecf0f1"
    }
})
  return (
    <View pointerEvents={disable ? "none" : "auto"} style={styles.InputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput ref={ref} placeholderTextColor="grey"  height={40} {...prop} style={styles.input} />
    </View>
  )
})

export default CustomFormField