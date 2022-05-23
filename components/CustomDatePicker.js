import React, { useState } from "react";
import { Text, View , TouchableOpacity , StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CustomDatePicker = ({openDate,setOpenDate,dateValue,setDateValue,label}) => {

  const handleConfirm = (date) => {
    setDateValue(date)
    setOpenDate(false);
  };

  const styles = StyleSheet.create({
    datePickerContainer:{
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
    <View style={styles.datePickerContainer}>
    <Text style={styles.label}>{label}</Text>
      <TouchableOpacity  style={{backgroundColor:"#ecf0f1",borderRadius:10,paddingLeft:8,justifyContent:'center',borderColor:"lightgrey",borderWidth:2,height:40}}  onPress={()=>setOpenDate(true)} >
        {dateValue ===null &&  <Text style={{fontSize:15,color:"grey"}} >DOB </Text> }
        {dateValue &&  <Text style={{fontSize:15,color:"black"}} >DOB : {dateValue.toDateString()}</Text>}
    </TouchableOpacity>
      <DateTimePickerModal
        isVisible={openDate}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={()=>setOpenDate(false)}
      />
    </View>
  );
};

export default CustomDatePicker;