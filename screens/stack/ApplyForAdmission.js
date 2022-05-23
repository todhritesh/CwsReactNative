import { View, StyleSheet , Button , TouchableOpacity , FlatList , useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import CustomFormField from '../../components/CustomFormField'
import GenderDropDown from '../../components/GenderDropdown'
import CustomDatePicker from '../../components/CustomDatePicker';


const ApplyForAdmission = ({navigation}) => {
const [dateValue,setDateValue] = useState(null)
const [openDate,setOpenDate] = useState(false)
const [openGender,setOpenGender] = React.useState(false)
const [genderValue,setGenderValue] = React.useState(null)
const {height,width} = useWindowDimensions()
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ecf0f1",
        alignItems:"center",
    },
    formContainer:{
        width:width,
        paddingHorizontal:width<height?(width*10)/100:(width*20)/100,
    }
    
})
  return (
    <View style={styles.container}>
        <View></View>
      {/* <View style={styles.formContainer}> */}
          <FlatList 
            style={styles.formContainer}
            ListHeaderComponent={
                <>            
                <CustomFormField label="Name" placeholder="Name..." />
                <CustomFormField label="Mother's Name" placeholder="Mother's Name..." />
                <CustomFormField label="Father's Name" placeholder="Father's Name..." />
                <CustomFormField label="Contact" keyboardType="numeric" placeholder="Contact..." />
                <CustomFormField label="Email" placeholder="Email..." />
                <GenderDropDown label="Gender" open={openGender} setOpen={setOpenGender} value={genderValue} setValue={setGenderValue} />
                </>
            }   

            ListFooterComponent={
                <>
                    <CustomDatePicker label="DOB" openDate={openDate} setOpenDate={setOpenDate} dateValue={dateValue} setDateValue={setDateValue} />
                    <CustomFormField label="Education" placeholder="Education..." />
                    <CustomFormField label="Address" textAlignVertical='top' multiline={true} height={120} placeholder="Address..." />
                    <TouchableOpacity style={{marginVertical:20}}>
                        <Button title="Submit Form" onPress={()=>navigation.navigate("review")} />
                    </TouchableOpacity>
                </>
            }
          />
      {/* </View> */}
    </View>
  )
}

export default ApplyForAdmission