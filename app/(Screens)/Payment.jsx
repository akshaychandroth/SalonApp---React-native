







// import React, { useContext, useState, useEffect } from "react";
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert, Modal } from "react-native";
// import { BookingContext } from "../BookingContext";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { useRouter } from "expo-router";
// import Icon from 'react-native-vector-icons/FontAwesome';



// const Payment = () => {
//   const { bookingDetails } = useContext(BookingContext);
//   const [userId, setUserId] = useState(null);
//   const [username, setUsername] = useState(null);
//   const [paymentDetails, setPaymentDetails] = useState({
//     services: [],
//     products: [],
//     totalAmount: 0,
//   });
//   const [isModalVisible, setIsModalVisible] = useState(false);  
//   const router = useRouter()

//   useEffect(() => {
//     const fetchUserId = async () => {
//       try {
//         const storedUserId = await AsyncStorage.getItem("userId");
//         const storedUsername = await AsyncStorage.getItem("username");
//         if (storedUserId && storedUsername) {
//           setUserId(storedUserId);
//           setUsername(storedUsername);
//         } else {
//           console.log("No userId found");
//         }
//       } catch (error) {
//         console.error("Error fetching userId from AsyncStorage:", error);
//       }
//     };

//     fetchUserId();
//   }, []);

//   const fetchPayment = async () => {
//     try {
//       const body = {
//         salonId: bookingDetails.salonId,
//         serviceNames: bookingDetails.services,
//         productIds: bookingDetails.products,
//       };

//       const response = await axios.post("http://192.168.1.5:8000/calculate-total", body);

//       console.log(response);
      

//       if (response.status === 200) {
//         setPaymentDetails(response.data);
//       } else {
//         Alert.alert("Error", response.data.message || "Failed to fetch payment details.");
//       }
//     } catch (error) {
//       console.error("Error fetching payment details:", error);
//       Alert.alert("Error", "Something went wrong while fetching payment details.");
//     }
//   };

//   useEffect(() => {
//     if (bookingDetails.salonId) {
//       fetchPayment();
//     }
//   }, [bookingDetails]);

//   const fetchbooking = async () => {
//     try {
//       const formattedDate = new Date(bookingDetails.date).toISOString().replace('Z', '+00:00');
  
//       const body = {
//         userId: userId,
//         salonId: bookingDetails.salonId,
//         stylistId: bookingDetails.stylist,
//         date: formattedDate,
//         slot: bookingDetails.slot,
//         serviceNames: bookingDetails.services,
//         productIds: bookingDetails.products,
//       };

//       const response = await axios.post("http://192.168.1.5:8000/book", body);

//       if (response.status === 200) {
//         // Show modal on success
//       } else {
//         setIsModalVisible(true);

//       }
//     } catch (error) {
//       console.error("Error booking appointment:", error);
//       alert("An error occurred while booking the appointment. Please try again.");
//     }
//   };

  
// const closeModal = () => {
//   setIsModalVisible(false);  
//   router.replace("Home");  
// };
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Checkout</Text>

//       {/* Payment Card Section */}
//       <View style={styles.cardContainer}>
//         <View style={styles.card}>
//           <Text style={styles.cardName}>{username}</Text>
//           <Text style={styles.cardNumber}>** ** ** 4667</Text>
//           <Text style={styles.validThru}>VALID THRU: 09/2027</Text>
//           <Text style={styles.cardType}>VISA</Text>
//         </View>
//       </View>

//       {/* Payment Summary */}
//       <View style={styles.summaryContainer}>
//         <Text style={styles.sectionTitle}>Payment Summary</Text>
//         <View style={styles.row} >
//             <Text style={styles.item}>Slot</Text>
//             <Text style={styles.price}>{bookingDetails.slot}</Text>
//           </View>
//         {paymentDetails.services.map((service, index) => (
//           <View style={styles.row} key={index}>
//             <Text style={styles.item}>{service.name}</Text>
//             <Text style={styles.price}>${service.cost}</Text>
//           </View>
//         ))}
//         {paymentDetails.products.map((product, index) => (
//           <View style={styles.row} key={index}>
//             <Text style={styles.item}>{product.name}</Text>
//             <Text style={styles.price}>${product.cost}</Text>
//           </View>
//         ))}
//         <View style={styles.row}>
//           <Text style={styles.total}>Grand Total</Text>
//           <Text style={styles.totalPrice}>${paymentDetails.totalAmount}</Text>
//         </View>
//       </View>

//       {/* Process Payment Button */}
//       <TouchableOpacity style={styles.button} onPress={fetchbooking}>
//         <Text style={styles.buttonText}>Process Payment</Text>
//       </TouchableOpacity>

//       {/* Success Modal */}
//       {/* <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isModalVisible}
//         onRequestClose={closeModal}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>Booking Successful</Text>
//             <Text style={styles.modalMessage}>Your appointment has been booked successfully!</Text>
//             <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
//               <Text style={styles.buttonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal> */}



// <Modal
//   animationType="slide"
//   transparent={true}
//   visible={isModalVisible}
//   onRequestClose={closeModal}
// >
//   <View style={styles.modalOverlay}>
//     <View style={styles.modalContainer}>
//       <Icon name="check-circle" size={50} color="green" style={styles.tickIcon} />
//       <Text style={styles.modalTitle}>Booking Successful</Text>
//       <Text style={styles.modalMessage}>Your appointment has been booked successfully!</Text>
//       <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
//         <Text style={styles.buttonText}>Close</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// </Modal>

//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E9F5FB",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   cardContainer: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   card: {
//     backgroundColor: "#3B99FC",
//     width: "90%",
//     height: 200,
//     borderRadius: 15,
//     padding: 20,
//     justifyContent: "center",
//   },
//   cardName: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   cardNumber: {
//     fontSize: 16,
//     color: "#fff",
//     marginBottom: 10,
//   },
//   validThru: {
//     fontSize: 14,
//     color: "#fff",
//     marginBottom: 10,
//   },
//   cardType: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold",
//     textAlign: "right",
//   },
//   summaryContainer: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 15,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   item: {
//     fontSize: 16,
//     color: "#555",
//   },
//   price: {
//     fontSize: 16,
//     color: "#555",
//   },
//   total: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   button: {
//     backgroundColor: "#3B99FC",
//     borderRadius: 10,
//     paddingVertical: 15,
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContainer: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 10,
//     width: "80%",
//     alignItems: "center",
//   },
//   modalTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   modalMessage: {
//     fontSize: 16,
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   modalButton: {
//     backgroundColor: "#3B99FC",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
// });

// export default Payment;















import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert, Modal } from "react-native";
import { BookingContext } from "../BookingContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';
import instance from "../instance";

const Payment = () => {
  const { bookingDetails } = useContext(BookingContext);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    services: [],
    products: [],
    totalAmount: 0,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);  
  const router = useRouter();

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("userId");
        const storedUsername = await AsyncStorage.getItem("username");
        if (storedUserId && storedUsername) {
          setUserId(storedUserId);
          setUsername(storedUsername);
        } else {
          console.log("No userId found");
        }
      } catch (error) {
        console.error("Error fetching userId from AsyncStorage:", error);
      }
    };

    fetchUserId();
  }, []);

  const fetchPayment = async () => {
    try {
      const body = {
        salonId: bookingDetails.salonId,
        serviceNames: bookingDetails.services,
        productIds: bookingDetails.products,
      };

      const response = await instance.post("/calculate-total", body);
      console.log(response);
      

      if (response.status === 200) {
        setPaymentDetails(response.data);
      } else {
        Alert.alert("Error", response.data.message || "Failed to fetch payment details.");
      }
    } catch (error) {
      console.error("Error fetching payment details:", error);
      Alert.alert("Error", "Something went wrong while fetching payment details.");
    }
  };

  useEffect(() => {
    if (bookingDetails.salonId) {
      fetchPayment();
    }
  }, [bookingDetails]);

  const fetchbooking = async () => {
    try {
      const formattedDate = new Date(bookingDetails.date).toISOString().replace('Z', '+00:00');
  
      const body = {
        userId: userId,
        salonId: bookingDetails.salonId,
        stylistId: bookingDetails.stylist,
        date: formattedDate,
        slot: bookingDetails.slot,
        serviceNames: bookingDetails.services,
        productIds: bookingDetails.products,
      };

      const response = await instance.post("/book", body);

      if (response.status === 200) {
        // Show modal on success
      } else {
        setIsModalVisible(true);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      // alert("An error occurred while booking the appointment. Please try again.");
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);  
    router.replace("Home");  
  };


  console.log(paymentDetails);
  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {/* Payment Card Section */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardName}>{username}</Text>
          <Text style={styles.cardNumber}>** ** ** 4667</Text>
          <Text style={styles.validThru}>VALID THRU: 09/2027</Text>
          <Text style={styles.cardType}>VISA</Text>
        </View>
      </View>

      {/* Payment Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.sectionTitle}>Payment Summary</Text>
        <View style={styles.row} >
          <Text style={styles.item}>Slot</Text>
          <Text style={styles.price}>{bookingDetails.slot}</Text>
        </View>
        {paymentDetails.services.map((service, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.item}>{service.name}</Text>
            <Text style={styles.price}>
            ₹{service.originalCost}{" "}
              <Text style={styles.discount}>(-₹{service.cost})</Text>
            </Text>
          </View>
        ))}
        {paymentDetails.products.map((product, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.item}>{product.name}</Text>
            <Text style={styles.price}>
            ₹{product.cost}{" "}
            </Text>
          </View>
        ))}
        <View style={styles.row}>
          <Text style={styles.total}>Grand Total</Text>
          <Text style={styles.totalPrice}>₹{paymentDetails.totalAmount}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={fetchbooking}>
        <Text style={styles.buttonText}>Process Payment</Text>
      </TouchableOpacity>

      {/* Success Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Icon name="check-circle" size={50} color="green" style={styles.tickIcon} />
            <Text style={styles.modalTitle}>Booking Successful</Text>
            <Text style={styles.modalMessage}>Your appointment has been booked successfully!</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9F5FB",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  cardContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#3B99FC",
    width: "90%",
    height: 200,
    borderRadius: 15,
    padding: 20,
    justifyContent: "center",
  },
  cardName: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  validThru: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
  },
  cardType: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
  },
  summaryContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    color: "#555",
  },
  price: {
    fontSize: 16,
    color: "#555",
  },
  discount: {
    fontSize: 14,
    color: "red",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  button: {
    backgroundColor: "#3B99FC",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  tickIcon: {
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#3B99FC",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Payment;
