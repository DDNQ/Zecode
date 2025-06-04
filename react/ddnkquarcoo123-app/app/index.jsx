import { StyleSheet, Text, View,} from "react-native";


// import { Colors } from "react-native/Libraries/NewAppScreen";

const Home=()=> {
  return (
    <View style={styles.container}>
      

      <Text style={styles.title}>Welcome Back !.</Text>
      <Text style={{color:'rgba(0, 0, 0, 0.44)',marginTop: 10, marginBottom: 30 }}>Sign Up To Your Account</Text>
      
      <View style={styles.card}>
        <Text>Enter your email</Text>
      </View>

      <View style={[styles.card, styles.size]}>
        <Text>Enter your password</Text>
      </View>

      <View style={styles.card}>
        <Text>Confirm your password</Text>
      </View>

      <View style={[styles.size2, styles.card_2]}>
        <Text style={{color:'rgb(249, 249, 249)'}}>Confirm your password</Text>
      </View>


    </View>
    
  )
}

export default Home
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "start",
      padding: 18,
      backgroundColor:'rgba(158, 189, 218, 0.63)'   
    },
    title: {
      fontWeight: 'bold',
      fontSize: 40
    },
    card: {
      backgroundColor: 'rgba(117, 120, 61, 0.17)',
      padding: 20,
      borderRadius: 20,
      boxShadow: '4px 4px rgba(0,0,0,0.1)'

  },
  size: {
    marginTop: 30,
    marginBottom: 30 
      
  },
  size2: {
    marginTop: 40,
  },
  card_2: {
    backgroundColor:'rgba(51, 125, 235, 1)',
    padding: 13,
    borderRadius: 10,
    alignItems:'center'
  }
  });

