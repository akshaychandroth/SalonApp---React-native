import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ScreenLayout = () => {
  return (
   <Stack>
    <Stack.Screen name='SalonHome' options={{
      
        headerShown:false
    }}/>

<Stack.Screen name='SalonDetails' options={{
    
     
    }}/>

<Stack.Screen name='AppointScreen' options={{
   headerShown:false
     
    }}/>


<Stack.Screen name='AppointmentDetails' options={{
     
    }}/>



   </Stack>
   
  )
}

export default ScreenLayout

const styles = StyleSheet.create({})