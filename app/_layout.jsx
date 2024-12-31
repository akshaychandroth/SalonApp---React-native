import {  StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SalonProvider } from './salonContext';
import { BookingProvider } from './BookingContext';
import { AppointmentProvider } from './AppointmentContext';



const _layout = () => {
  return (
   < SalonProvider>
   <BookingProvider>
    <AppointmentProvider>

 
    <Stack>
    
     <Stack.Screen name="index" options={{
      headerShown:false
     }}/>
     <Stack.Screen name="(auth)" options={{
      headerShown:false
     }}/>
  <Stack.Screen name="(tabs)" options={{
      headerShown:false
     }}/>
 <Stack.Screen name="(Screens)" options={{
     headerShown:false
     }}/>

  


    

    </Stack>
    </AppointmentProvider>
    </BookingProvider>
    </SalonProvider>
  
  );
};

export default _layout;

const styles = StyleSheet.create({});
