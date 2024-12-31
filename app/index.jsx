

import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('LoginScreen'); 
    }, 8000);

    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: "http://clipart-library.com/images/8cxrMd56i.png" }}
        style={styles.logo} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5d89ba', 
  },
  logo: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
  },
});

