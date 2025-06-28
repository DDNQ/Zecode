import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  topGap:{
    marginTop:30,

  },
  container:{
    flexGrow:1,
    paddingHorizontal:10,
    width:"100%",
  },
  topInfo:{
    height:70,
    marginTop:20,
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"row"


  },
  img:{
    width:40,
    borderRadius:30,
    border:2,
    borderColor:"red"
  },
  textContainer:{
    display:"flex",
    flexDirection:"column",
  }

})

{import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

export default function Homescreen() {
  return (
    <SafeAreaView>

   <FlatList
   
   
   />
    
   

    </SafeAreaView>
  )
}}

export default styles;