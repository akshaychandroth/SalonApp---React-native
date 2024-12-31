


import axios from "axios";
import { Link, useRouter } from "expo-router";
import React, { useState ,useEffect } from "react";
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from "../instance";




const LoginScreen = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const router=useRouter()

  

  const handleLogin = async () => {
    try {
        const response = await instance.post("/salonlogin", {
            username,
            password
        });
        console.log('====================================');
        console.log(response);
        console.log('====================================');

        if (response.data.message=="Login successful!") {

            await AsyncStorage.setItem('userId', response.data.login._id);
            await AsyncStorage.setItem('username', response.data.login.username);
            await AsyncStorage.setItem('image', response.data.login.image);
            alert(response.data.message);
          
            router.replace("Home");
        } else {
            alert('Login failed');
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
};


  const register= ()=>{
    router.replace("SignupScreen")
  }




  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
      
      </View>

      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello</Text>
      </View>
      <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setusername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>



      <TouchableOpacity  onPress={register}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    
  },
  topImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  topImage: {
    width: "110%",
    height: 130,
    resizeMode: "contain",
  },
  helloContainer: {
    marginBottom: 10,
  },
  helloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#262626",
  },
  signInText: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626",
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  loginButton: {
    backgroundColor: "#5d89ba",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  signupText: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
  },
  signupLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});



