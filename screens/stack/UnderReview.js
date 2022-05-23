import { View, Text , StyleSheet ,Button, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"

const UnderReview = () => {
const {height,width} = useWindowDimensions()
const {navigate} = useNavigation()
const styles = StyleSheet.create({
    contianer:{
        flex:1,
        backgroundColor:"#ecf0f1",
        alignItems:'center',
        marginTop:width<=height?70:50
    },
    card:{
        width:width<height?(width*80)/100:(width*50)/100,
        borderWidth:2,
        backgroundColor:"white",
        borderColor:'lightgrey',
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    cardBody:{
        paddingHorizontal:10,
        paddingVertical:30
    },
    content:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:'center',
        color:"darkorange",
    }
})
  return (
    <View style={styles.contianer}>
        <View style={styles.card}>
            <View style={styles.cardBody}>
                <Text style={styles.content}>
                    Your application is under review !
                </Text>
            </View>
        </View>
        <TouchableOpacity style={{marginTop:50}}>
            <Button title='Go Back To HOme' onPress={()=>navigate("stackHome")} />
        </TouchableOpacity>
    </View>
  )
}

export default UnderReview