import { View, Text , StyleSheet , StatusBar , Animated ,  useWindowDimensions } from 'react-native'
import React from 'react'

const Logo = () => {
const TextSizeAnimation = React.useState(new Animated.Value(0))[0]
const TextOpacityAnimation = React.useState(new Animated.Value(0))[0]
function StartAnimation(){
    Animated.parallel([
        Animated.timing(TextSizeAnimation , {
            toValue:35,
            duration:2000,
            useNativeDriver:false
        }),
        Animated.timing(TextOpacityAnimation , {
            toValue:1,
            duration:2000,
            useNativeDriver:false
        })
    ]).start()
}

React.useEffect(()=>{
    StartAnimation()
},[])

const {height,width} = useWindowDimensions()
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        justifyContent:'center',
        alignItems:"center",
    },
    logoContainer:{
        width:width<height?(width*80)/100:(width*50)/100
    },
    content:{
        fontSize:TextSizeAnimation,
        color:"white",
        fontWeight:'bold',
        textAlign:'center',
        opacity:TextOpacityAnimation
    }
})

  return (
    <View style={styles.container}>
        <StatusBar hidden={true} />
      <View style={styles.logoContainer}>
        <Animated.Text style={styles.content}>Code With SadiQ</Animated.Text>
      </View>
    </View>
  )
}

export default Logo