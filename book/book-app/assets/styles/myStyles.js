import { StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    backgroundColor: "#fffff",
    marginTop:50,
    marginHorizontal:10,
    
   
},
      scrollViewStyle:{
        flex:1,
        backgroundColor:"#ffff",
    },
    card:{
      padding:0,
      paddingTop:0,
  }, 

      
      
  });

  export default styles;