import { View, Text , StyleSheet , Button , TouchableOpacity , useWindowDimensions } from 'react-native'
import React from 'react'
import CustomFormField from '../../components/CustomFormField'
import {useNavigation} from "@react-navigation/native"

const Login = () => {
const {navigate} = useNavigation()
const {height,width} = useWindowDimensions()
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ecf0f1",
        alignItems:"center",
    },
    formContainer:{
        width:width<height?(width*80)/100:(width*50)/100,
        paddingTop:30
    }
    
})
  return (
    <View style={styles.container}>
        <View></View>
      <View style={styles.formContainer}>
          <CustomFormField label="Mobile Number" placeholder="Mobile Number..." />
          <CustomFormField label="Otp" placeholder="Enter Otp..." />
          <TouchableOpacity style={{marginVertical:10}}>
              <Button title="Login" onPress={()=>navigate("drawer")} />
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login