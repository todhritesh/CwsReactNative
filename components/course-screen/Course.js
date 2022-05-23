import { View, Text , useWindowDimensions , StyleSheet } from 'react-native'
import React from 'react'

const Course = ({courseTitle,duration,instructor,fee,description}) => {
    const {height,width} = useWindowDimensions()
    const styles = StyleSheet.create({
        card:{
            width:width<height ?(width*90)/100 : (width*70)/100,
            paddingHorizontal:10,
            marginBottom:20,
            backgroundColor:'#ecf0f1',
            margin:10,
            borderColor:'lightgrey',
            borderWidth:1,
            elevation:10,
        },
        cardBody:{
            paddingVertical:10,
            paddingHorizontal:5,
            justifyContent:"center",
            alignItems:'center',
        },
        cardImage:{
            width:width<height ?(width*60)/100 : (width*40)/100,
            height:width<height ?(height*30)/100 : (height*60)/100,
            backgroundColor:"grey",
            marginTop:5,
        },
        courseDetailsContainer:{
            marginTop:5,

        },
        leftText:{
            fontWeight:"bold",
            fontSize:18,
            color:'black'
        },
        rightText:{
            fontWeight:"normal"
        },
        cardTitleContainer:{
            marginTop:5,

        },
        cardTitle:{
            fontWeight:'bold',
            fontSize:22,
            color:"black"
        },
        cardDescriptionContainer:{
            marginTop:5,
        },
        cardDescription:{
            fontSize:17,
            color:"black",
            textAlign:'center'
        }
    })
  return (
    <View style={styles.card}>
        <View style={styles.cardBody}>
            <View style={styles.cardImage}>

            </View>
            <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>{courseTitle}</Text>
            </View>
            <View style={styles.courseDetailsContainer}>
                <Text style={styles.leftText} >Course Fee : <Text  style={styles.rightText}>Rs. {fee}</Text></Text>
                <Text style={styles.leftText} >Duration : <Text  style={styles.rightText}>{duration + " "+ "Months"} </Text></Text>
                <Text style={styles.leftText} >Instructor : <Text  style={styles.rightText}>{instructor}</Text></Text>
            </View>
            <View style={styles.cardDescriptionContainer}>
                <Text style={styles.cardDescription}>
                    {description}
                </Text>
            </View>
        </View>
    </View>
  )
}

export default Course