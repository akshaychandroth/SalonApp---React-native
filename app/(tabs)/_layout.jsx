
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { CalendarIcon } from 'react-native-heroicons/outline';
import AntDesign from '@expo/vector-icons/AntDesign';
const Tablayout = () => {
  return (
    <Tabs>
      {/* <Tabs.Screen
        name="Home"
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
     
        }}
      /> */}


<Tabs.Screen
  name="Home"
  options={{
    title: "My Home", 
    headerTitleAlign: "center", 
    headerStyle: {
      backgroundColor: "#5d89ba",
    },
    headerTintColor: "#fff", 
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home-outline" size={size} color={color} />
    ),
  }}
/>




<Tabs.Screen
  name="Appointments"
  options={{
    headerShown: false,
    // tabBarIcon: ({ color, size }) => (

    //   <Ionicons name="calendar-outline" size={size} color={color} />

    // ),
    tabBarIcon: ({ color, size }) => (
      <AntDesign name="book" size={24} color="black" />
    ),

  
  }}
/>

   



    
    </Tabs>
  );
};

export default Tablayout;

const styles = StyleSheet.create({});
