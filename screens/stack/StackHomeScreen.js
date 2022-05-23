import { View, Text , StyleSheet , Button , TouchableOpacity , useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const StackHomeScreen = () => {
const {navigate} = useNavigation();
const {height,width} = useWindowDimensions()
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ecf0f1",
        justifyContent:'center',
        alignItems:"center",
    },
    btnContainer:{
        width:width<height?(width*80)/100:(width*50)/100
    }
})
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={{marginBottom:20}}>
            <Button title='Login' onPress={()=>navigate("login")} />
        </TouchableOpacity>
            <Button title='Apply For Admission' onPress={()=>navigate("apply")} />
        <TouchableOpacity style={{marginBottom:20}}>
        </TouchableOpacity>
        <TouchableOpacity >
            <Button title='Enter As Guest' onPress={()=>navigate("drawer")} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StackHomeScreen