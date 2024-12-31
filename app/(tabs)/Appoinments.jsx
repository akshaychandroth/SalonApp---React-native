// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Appoinments = () => {
//   return (
//     <View>
//       <Text>Appoinments</Text>
//     </View>
//   )
// }

// export default Appoinments

// const styles = StyleSheet.create({})







import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppointScreen from '../(Screens)/AppointScreen';

const Appoinments = () => {
  const [userId, setUserId] = useState(null);
  const [username,setusername]= useState()
   const[image,setImage]=useState()
  


  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        const storedUsername = await AsyncStorage.getItem('username');
        const storedImage = await AsyncStorage.getItem('image');
        if (storedUserId && storedUsername) {
          setUserId(storedUserId);  
          setusername(storedUsername)
          setImage(storedImage)
        } else {
          console.log('No userId found');
        }
      } catch (error) {
        console.error('Error fetching userId from AsyncStorage:', error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <View style={styles.container}>
      {userId ? (
        <AppointScreen userId={userId} username={username} image={image} /> 
      ) : (
        <Text>Loading user data...</Text>  
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height:"100%"
  }
 
});

export default Appoinments;
