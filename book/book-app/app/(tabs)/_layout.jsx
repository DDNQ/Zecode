import { Tabs } from "expo-router";
import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'



export default function _layout() {
  return (

    <Tabs screenOptions={{ headerShown: false }}>

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (<Ionicons name='home-outline' size={size} color={color} />)
        }
        }
      />

      <Tabs.Screen
        name="mypage"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (<MaterialIcons name='favorite' size={size} color={color} />)
        }
        }
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (<Ionicons name='person-outline' size={size} color={color} />)
        }
        }
      />


    </Tabs>
  )
}
