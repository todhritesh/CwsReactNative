import { View, StyleSheet } from 'react-native'
import React from 'react'
import Course from '../../components/course-screen/Course'
import { ScrollView, TextInput } from 'react-native-gesture-handler'


const CoursesScreen = () => {
  const [data,setData] = React.useState([])
  const [tempData,setTempData] = React.useState([])
  const styles = StyleSheet.create({
    formControl:{
        padding:5,
        marginTop:2,
      },
      formInput:{
        height:30,
        paddingVertical:2,
        borderColor:"lightgrey",
        borderWidth:2,
        borderRadius:10,
        paddingLeft:10,
        fontSize:15,
        marginTop:5,
        color:"black",
    }
})
  function getData(){
    const data = [
        {
            courseTitle:"React js",
            image:"../../images/random.webp",
            duration:1,
            fee:234,
            instructor:"Test demo",
            description:"Lorem Ipsum is simply printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem"
        },
        {
            courseTitle:"Node js",
            image:"../../images/random.webp",
            duration:1,
            fee:234,
            instructor:"Test demo",
            description:"Lorem Ipsum is simply industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem"
        },
        {
            courseTitle:"Html,css,js",
            image:"../../images/random.webp",
            duration:1,
            fee:234,
            instructor:"Test demo",
            description:"Lorem Ipsum is simply the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem"
        },
        {
            courseTitle:"React Native",
            image:"../../images/random.webp",
            duration:1,
            fee:234,
            instructor:"Test demo",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem"
        },
        {
            courseTitle:"Java",
            image:"../../images/random.webp",
            duration:1,
            fee:234,
            instructor:"Test demo",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem"
        },
        
    ]

    setData(data);
    setTempData(data);
  }
  React.useEffect(()=>{
      getData()
  },[])

  function handleFilter(value){
    if(value===""){
      setData(tempData)
    }else{
      const filterData = data.filter(item=>{
        if(item.courseTitle.toLowerCase().includes(value.toLowerCase())){
          return item;
        }
      })
      setData(filterData);
    }
  }

  return (
    <View>
      <ScrollView >
        <View style={styles.formControl}>
            <TextInput placeholderTextColor="grey" onChangeText={(val)=>handleFilter(val)} placeholder='Search course...'  style={styles.formInput} />
        </View>
        <View  style={{justifyContent:"center",alignItems:'center'}}>
        {
          data.map((item,i)=>(
            <Course key={i} courseTitle={item.courseTitle} image={item.image} description={item.description} fee={item.fee} duration={item.duration} instructor={item.instructor} />
          ))
        }
        </View>
      </ScrollView>
    </View>
  )
}

export default CoursesScreen