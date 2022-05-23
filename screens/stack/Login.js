import { View, Text , StyleSheet , Button , TouchableOpacity , useWindowDimensions } from 'react-native'
import React,{useState,useRef} from 'react'
import CustomFormField from '../../components/CustomFormField'
import {useNavigation} from "@react-navigation/native"
import auth from  "@react-native-firebase/auth";
  
const Login = () => {
const numberCode = "+5"
const [resendOtpCounter , setResendOtpCounter] = useState(0)
const phoneInput = useRef()
const [sendOtp,setSendOtp] = useState(false)
const [confirmData , setConfirmData] = useState(null)
const [number,setNumber] = useState("")
const [code,setCode] = useState("")
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

async function handleMobileNumber(){
  if(number.length < 10 || number.length > 10){
    alert("Invalid phone number")
    return 
  }
  try{
    const phoneNumber = numberCode+number
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirmData(confirmation);
    setSendOtp(true)
    alert("Otp sent to "+phoneNumber);
    setResendOtpCounter(30)
  }catch(err){
    console.log(err)
    alert("Something went wrong.")
  }
}

async function handleVerification(){
  if(code.length ===6){
    try{
      await confirmData.confirm(code);
      alert("Success")
    }catch(err){
      console.log(err)
      alert("Incorrect otp")
    }
  }
  return
}

function resendTimeCounterDec(){
  setResendOtpCounter(resendOtpCounter-1);
}

React.useEffect(()=>{
  if(resendOtpCounter===0){
      console.log("TIME LEFT IS 0");
      // setReSendOtp(true)
      setResendOtpCounter(0)
   }

   if (!resendOtpCounter) return;

   const intervalId = setInterval(
      resendTimeCounterDec
   , 1000);

   return () => clearInterval(intervalId);
},[resendOtpCounter])


React.useEffect(()=>{
  // console.log(y.current)
  return ()=>{ phoneInput.current.blur()}
},[sendOtp])

  return (
    <View style={styles.container}>
        <View></View>
      <View style={styles.formContainer}>
          <CustomFormField ref={phoneInput} disabled = {sendOtp} keyboardType="numeric" onChangeText={(val)=>setNumber(val)} value={number} label="Mobile Number" placeholder="Mobile Number..." />
          {sendOtp && <CustomFormField keyboardType="numeric" value={code} onChangeText={(val)=>setCode(val)} label="Otp" placeholder="Enter Otp..." />}
          <TouchableOpacity style={{marginVertical:10}}>
              {!sendOtp && <Button title="Send Otp" onPress={()=>handleMobileNumber()} />}
              {sendOtp && <Button title="Verify Otp" onPress={()=>handleVerification()} />}
          </TouchableOpacity>

          {sendOtp && <TouchableOpacity activeOpacity={resendOtpCounter === 0 ? 0.5 : 1} style={{marginVertical:10,flexDirection:"row"}}>
               <Button disabled={resendOtpCounter === 0 ? false:true} style={{backgroundColor:"black"}} title="Resend Otp" color="green" onPress={()=>handleMobileNumber()} />
                {resendOtpCounter !== 0 ? <Text style={{marginLeft:10,fontSize:22,fontWeight:"600",textAlignVertical:"center"}} >{resendOtpCounter}</Text>:null}
              <View style={{flex:1}}></View>
          </TouchableOpacity>}
      </View>
    </View>
  )
}

export default Login