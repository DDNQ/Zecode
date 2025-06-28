import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { Feather, Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome6, Octicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import User from '../../assets/images/User.jpeg'
import { StatusBar } from 'expo-status-bar';


const Profile = () => {

  const Row = ({ icon, label, onPress }) => (
    <>
      <TouchableOpacity style={styles.row}>
        {icon}
        <Text style={styles.rowLabel}>{label}</Text>
        <Feather name='chevron-right' size={20} color="#fff" />
      </TouchableOpacity>
      <View style={styles.divider} />
    </>

  );

  return (
    <SafeAreaView style={[styles.container]}>
      {/* 
       */}

      {/* Header  */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="white" />

        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.imgContainer}>
        <Image source={User} style={styles.img} />
        <Text style={styles.imgTitle}>Shop All LTD. <MaterialIcons name="verified" size={19} color="rgba(0, 137, 250, 0.65)" /></Text>
      </View>

      {/* Options */}
      <View style={styles.body}>
        <Row
          icon={<Feather name="user" size={20} color='#fff' />}
          label="Edit Profile"
        />

        <Row
          icon={<MaterialCommunityIcons name="access-point" size={20} color="white" />}
          label="My Ads"
        />

        <Row
          icon={<Ionicons name="settings-outline" size={20} color='#fff' />}
          label="Settings"
        />

        <Row
          icon={<FontAwesome6 name="arrow-trend-up" size={20} color="white" />}
          label="Go Premium"
        />

        <Row
          icon={<MaterialIcons name="logout" size={20} color='#fff' />}
          label="Logout"
        />

      </View>

    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgba(3, 3, 3, 0.93)',
    padding: 5
  },
  back: {
    position: 'absolute',
    left: 20,
    top: 10,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 16,
    marginBottom: 15

  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
  },

  body: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 7,
    marginTop: 7
  },
  rowLabel: {
    flex: 1,
    marginLeft: 14,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 15,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  imgTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    marginTop: 10,
    marginBottom: 10

  },
  imgContainer: {
    alignItems: 'center',
    marginTop: 10
  }

})