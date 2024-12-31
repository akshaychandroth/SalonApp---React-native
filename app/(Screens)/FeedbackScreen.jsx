// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
// } from "react-native";
// import { useAppointment } from "../AppointmentContext";


// const FeedbackScreen = () => {
//   const [email, setEmail] = useState("");
//   const [rating, setRating] = useState(null); // Emoji rating
//   const [comment, setComment] = useState("");
//   const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
//   const { selectedAppointment } = useAppointment();

//   console.log(selectedAppointment);

//   console.log('====================================');
//   console.log(rating);
//   console.log('====================================');
  

//   const handleFeedbackSubmit = () => {
//     if (!rating) {
//       alert("Please rate your experience.");
//       return;
//     }
//     // Show the thank-you modal
//     setIsModalVisible(true);
//   };

//   const closeModal = () => {
//     setIsModalVisible(false);
//     // Reset form fields if needed
//     setEmail("");
//     setRating(null);
//     setComment("");
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Give Feedback</Text>

//       {/* Email Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email address (optional)"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />

//       {/* Emoji Rating */}
//       <Text style={styles.subtitle}>Rate your experience</Text>
//       <View style={styles.emojiContainer}>
//         {["😡", "😟", "😐", "🙂", "😁"].map((emoji, index) => (
//           <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
//             <Text style={[styles.emoji, rating === index + 1 && styles.selectedEmoji]}>
//               {emoji}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Comment Input */}
//       <TextInput
//         style={[styles.input, styles.commentInput]}
//         placeholder="Comment, if any?"
//         value={comment}
//         onChangeText={setComment}
//         multiline
//       />

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.button} onPress={handleFeedbackSubmit}>
//         <Text style={styles.buttonText}>Publish Feedback</Text>
//       </TouchableOpacity>

//       {/* Thank You Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isModalVisible}
//         onRequestClose={closeModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.thankYouText}>Thank You!</Text>
//             <Text style={styles.message}>
//               By making your voice heard, you help us improve our services.
//             </Text>
//             <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
//               <Text style={styles.modalButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default FeedbackScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f8f8f8",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 20,
//     backgroundColor: "#fff",
//   },
//   commentInput: {
//     height: 100,
//     textAlignVertical: "top",
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   emojiContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   emoji: {
//     fontSize: 32,
//     marginHorizontal: 10,
//   },
//   selectedEmoji: {
//     borderWidth: 2,
//     borderColor: "#007BFF",
//     borderRadius: 50,
//     padding: 5,
//   },
//   button: {
//     backgroundColor: "#007BFF",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     width: "80%",
//     padding: 20,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   thankYouText: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   message: {
//     fontSize: 16,
//     textAlign: "center",
//     color: "#555",
//     marginBottom: 20,
//   },
//   modalButton: {
//     backgroundColor: "#007BFF",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   modalButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });






import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useAppointment } from "../AppointmentContext";
import { useRouter } from "expo-router";
import instance from "../instance";


const FeedbackScreen = () => {
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(null); 
  const [comment, setComment] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const { selectedAppointment } = useAppointment();
  const router = useRouter()

  console.log(selectedAppointment);
  console.log('====================================');
  console.log(rating);
  console.log('====================================');
  
  // Handle feedback submission
  const handleFeedbackSubmit = async () => {
    if (!rating) {
      alert("Please rate your experience.");
      return;
    }

    // Prepare feedback data
    const feedbackData = {
      salonId: selectedAppointment.salonId,
      email,
      rating,
      comment,
      userId: selectedAppointment.userId, // assuming the selected appointment has userId
      bookingId: selectedAppointment._id, // assuming the selected appointment has bookingId
    };

    try {
      // Make API call to submit feedback
      const response = await instance.post("/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Show the thank-you modal on successful submission
        setIsModalVisible(true);
      } else {
        // Handle API errors
        alert(responseData.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    // Reset form fields if needed

    router.replace("Home")
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give Feedback</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email address (optional)"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Emoji Rating */}
      <Text style={styles.subtitle}>Rate your experience</Text>
      <View style={styles.emojiContainer}>
        {["😡", "😟", "😐", "🙂", "😁"].map((emoji, index) => (
          <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
            <Text style={[styles.emoji, rating === index + 1 && styles.selectedEmoji]}>
              {emoji}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Comment Input */}
      <TextInput
        style={[styles.input, styles.commentInput]}
        placeholder="Comment, if any?"
        value={comment}
        onChangeText={setComment}
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleFeedbackSubmit}>
        <Text style={styles.buttonText}>Publish Feedback</Text>
      </TouchableOpacity>

      {/* Thank You Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.thankYouText}>Thank You!</Text>
            <Text style={styles.message}>
              By making your voice heard, you help us improve our services.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  commentInput: {
    height: 100,
    textAlignVertical: "top",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  emojiContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  emoji: {
    fontSize: 32,
    marginHorizontal: 10,
  },
  selectedEmoji: {
    borderWidth: 2,
    borderColor: "#007BFF",
    borderRadius: 50,
    padding: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  thankYouText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
