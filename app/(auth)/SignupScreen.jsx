

// import { Link, useRouter } from "expo-router";
// import React, { useState } from "react";
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
// import axios from "axios";


// const SignupScreen = () => {
//   const [username, setusername] = useState("");
//   const [phonenumber, setphonenumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter()

//   const handleRegister = async () => {
//     if (!username || !phonenumber || !password || !confirmPassword) {
//       setError("Please fill all fields");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post("http://192.168.1.5:8000/userregister", {
//         username,
//         phonenumber,
//         password,
//       });
//       console.log("Registration successful:", response.data);
     
//       alert("Registered successfully")
//       router.replace("LoginScreen")
//     } catch (error) {
//       console.error("Registration error:", error);
//       setError("Registration failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };


//   const login = ()=>{
//     router.replace("LoginScreen")
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Register</Text>

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#999"
//           value={username}
//           onChangeText={setusername}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Mobile Number"
//           placeholderTextColor="#999"
//           keyboardType="phone-pad"
//           value={phonenumber}
//           onChangeText={setphonenumber}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#999"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           placeholderTextColor="#999"
//           secureTextEntry
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//         />
//       </View>

//       {loading ? (
//         <ActivityIndicator size="large" color="#007BFF" />
//       ) : (
//         <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
//           <Text style={styles.registerButtonText}>Register</Text>
//         </TouchableOpacity>
//       )}

//       {error && <Text style={styles.errorText}>{error}</Text>}

      
//         <TouchableOpacity onPress={login}>
//           <Text style={styles.loginText}>
//             Already have an account? <Text style={styles.loginLink}>Login</Text>
//           </Text>
//         </TouchableOpacity>
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     paddingHorizontal: 20,
//     justifyContent: "center",
//   },
//   headerText: {
//     fontSize: 32,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#262626",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     marginVertical: 20,
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#CCC",
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     marginBottom: 15,
//     backgroundColor: "#FFF",
//   },
//   registerButton: {
//     backgroundColor: "#5d89ba",
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   registerButtonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   loginText: {
//     textAlign: "center",
//     fontSize: 16,
//     color: "#999",
//   },
//   loginLink: {
//     color: "#007BFF",
//     fontWeight: "bold",
//   },
//   errorText: {
//     color: "red",
//     textAlign: "center",
//     fontSize: 16,
//   },
// });

// export default SignupScreen;











// import { Link, useRouter } from "expo-router";
// import React, { useState } from "react";
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Image } from "react-native";
// import axios from "axios";
// import * as ImagePicker from 'expo-image-picker';

// const SignupScreen = () => {
//   const [username, setusername] = useState("");
//   const [phonenumber, setphonenumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [image, setImage] = useState(null); // New state for the image
//   const router = useRouter();

//   const handleRegister = async () => {
//     if (!username || !phonenumber || !password || !confirmPassword) {
//       setError("Please fill all fields");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     setLoading(true);
//     setError("");

//     // Prepare image data for upload
//     const formData = new FormData();
//     formData.append("username", username);
//     formData.append("phonenumber", phonenumber);
//     formData.append("password", password);
    
//     if (image) {
//       formData.append("image", {
//         uri: image.uri,
//         name: image.uri.split("/").pop(),
//         type: "image/jpeg", // Adjust the MIME type if necessary
//       });
//     }

//     try {
//       const response = await axios.post("http://192.168.1.5:8000/userregister", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Registration successful:", response.data);

//       alert("Registered successfully");
//       router.replace("LoginScreen");
//     } catch (error) {
//       console.error("Registration error:", error);
//       setError("Registration failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = () => {
//     router.replace("LoginScreen");
//   };

//   const pickImage = async () => {
//     // Request permission to access the image library
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== "granted") {
//       alert("Permission to access the image library is required!");
//       return;
//     }

//     // Launch the image picker
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0]); // Set the selected image
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Register</Text>

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#999"
//           value={username}
//           onChangeText={setusername}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Mobile Number"
//           placeholderTextColor="#999"
//           keyboardType="phone-pad"
//           value={phonenumber}
//           onChangeText={setphonenumber}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#999"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           placeholderTextColor="#999"
//           secureTextEntry
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//         />
//       </View>

//       {/* Image picker */}
//       <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
//         <Text style={styles.imagePickerText}>
//           {image ? "Change Image" : "Select Profile Image"}
//         </Text>
//       </TouchableOpacity>

//       {/* Display selected image */}
//       {image && (
//         <Image source={{ uri: image.uri }} style={styles.selectedImage} />
//       )}

//       {loading ? (
//         <ActivityIndicator size="large" color="#007BFF" />
//       ) : (
//         <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
//           <Text style={styles.registerButtonText}>Register</Text>
//         </TouchableOpacity>
//       )}

//       {error && <Text style={styles.errorText}>{error}</Text>}

//       <TouchableOpacity onPress={login}>
//         <Text style={styles.loginText}>
//           Already have an account? <Text style={styles.loginLink}>Login</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     paddingHorizontal: 20,
//     justifyContent: "center",
//   },
//   headerText: {
//     fontSize: 32,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#262626",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     marginVertical: 20,
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#CCC",
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     marginBottom: 15,
//     backgroundColor: "#FFF",
//   },
//   registerButton: {
//     backgroundColor: "#5d89ba",
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   registerButtonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   loginText: {
//     textAlign: "center",
//     fontSize: 16,
//     color: "#999",
//   },
//   loginLink: {
//     color: "#007BFF",
//     fontWeight: "bold",
//   },
//   errorText: {
//     color: "red",
//     textAlign: "center",
//     fontSize: 16,
//   },
//   imagePicker: {
//     backgroundColor: "#f0f0f0",
//     paddingVertical: 10,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   imagePickerText: {
//     color: "#007BFF",
//     fontSize: 16,
//   },
//   selectedImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginVertical: 10,
//     alignSelf: "center",
//   },
// });

// export default SignupScreen;




import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';
import instance from "../instance";

const SignupScreen = () => {
  const [username, setusername] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null); // New state for the image
  const router = useRouter();

  const validateForm = () => {
    // Email validation (simple regex for now)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(username)) {
      setError("Please enter a valid email address.");
      return false;
    }

    // Phone number validation (10 digits)
    if (phonenumber.length !== 10 || isNaN(phonenumber)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }

    // Password validation (min 8 characters)
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return false;
    }

    // Image validation
    if (!image) {
      setError("Please select a profile image.");
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    // Prepare image data for upload
    const formData = new FormData();
    formData.append("username", username);
    formData.append("phonenumber", phonenumber);
    formData.append("password", password);
    
    if (image) {
      formData.append("image", {
        uri: image.uri,
        name: image.uri.split("/").pop(),
        type: "image/jpeg", // Adjust the MIME type if necessary
      });
    }

    try {
      const response = await instance.post("/userregister", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Registration successful:", response.data);

      alert("Registered successfully");
      router.replace("LoginScreen");
    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const login = () => {
    router.replace("LoginScreen");
  };

  const pickImage = async () => {
    // Request permission to access the image library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access the image library is required!");
      return;
    }

    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]); // Set the selected image
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Register</Text>

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
          placeholder="Mobile Number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={phonenumber}
          onChangeText={setphonenumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Image picker */}
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>
          {image ? "Change Image" : "Select Profile Image"}
        </Text>
      </TouchableOpacity>

      {/* Display selected image */}
      {image && (
        <Image source={{ uri: image.uri }} style={styles.selectedImage} />
      )}

      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity onPress={login}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
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
  registerButton: {
    backgroundColor: "#5d89ba",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  registerButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  loginText: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
  },
  loginLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
  },
  imagePicker: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  imagePickerText: {
    color: "#007BFF",
    fontSize: 16,
  },
  selectedImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
    alignSelf: "center",
  },
});

export default SignupScreen;

