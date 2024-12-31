


// import React, { useState,useEffect, useContext } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   ScrollView,
//   Platform,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { useSalonContext } from '../salonContext';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useRouter } from 'expo-router';
// import { BookingContext } from '../BookingContext';



// const SalonDetails = () => {
//   const [userId, setUserId] = useState(null);
//   const [username,setusername]= useState()
//   const { selectedSalon } = useSalonContext();
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [isDatePickerVisible, setDatePickerVisible] = useState(false);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const[availableSlots,setAvailableSlots]=useState([])
//   const [selectedStylist, setSelectedStylist] = useState(null);
//   const navigation= useRouter()
//   const { setBookingDetails } = useContext(BookingContext);

// console.log('====================================');
// console.log(selectedSalon);
// console.log('====================================');

// const [selectedServices, setSelectedServices] = useState([]); 



// const [selectedProducts, setSelectedProducts] = useState([]);

// const toggleProductSelection = (productId) => {
//   setSelectedProducts((prevSelected) =>
//     prevSelected.includes(productId)
//       ? prevSelected.filter((id) => id !== productId) 
//       : [...prevSelected, productId] 
//   );
// };

// console.log('====================================');
// console.log(selectedServices);
// console.log('====================================');

// // Function to toggle selection of a service
// const handleSelectService = (serviceName) => {
//   setSelectedServices((prevSelected) => {
//     if (prevSelected.includes(serviceName)) {
//       return prevSelected.filter((service) => service !== serviceName);
//     } else {
//       return [...prevSelected, serviceName];
      
//     }
//   });
// };




// useEffect(() => {
//   const fetchUserId = async () => {
//     try {
//       const storedUserId = await AsyncStorage.getItem('userId');
//       const storedUsername = await AsyncStorage.getItem('username');
//       if (storedUserId && storedUsername) {
//         setUserId(storedUserId);  
//         setusername(storedUsername)
//       } else {
//         console.log('No userId found');
//       }
//     } catch (error) {
//       console.error('Error fetching userId from AsyncStorage:', error);
//     }
//   };

//   fetchUserId();
// }, []);

// console.log('=============Hiiiiiii=======================');
// console.log(selectedSlot);
// console.log('====================================');

//   const [loading, setLoading] = useState(false);


//   console.log('====================================');
//   console.log(selectedDate);
//   console.log('====================================');

// console.log('====================================');
// console.log(selectedStylist);
// console.log('====================================');





//   const fetchAvailableSlots = async () => {
//         setLoading(true);
//         const formattedDate = new Date(selectedDate).toISOString().replace('Z', '+00:00');
//         console.log('====================================');
//         console.log(formattedDate,"akshay");
//         console.log('====================================');
//         try {
//           const body = {
          
           
//             date: formattedDate,
//             stylistId: selectedStylist,
//             serviceNames: selectedServices,
//           };
//           console.log(body);
          
//           const response = await axios.post(`http://192.168.17.199:8000/salons/${selectedSalon._id}/available-slots`, body);
//           console.log(response);
    
//           if (response.status === 200) {
//             const slotsWithAvailability = response.data.slots.map((slot) => ({
//               time: slot, 
              
//             }));
//             setAvailableSlots(slotsWithAvailability);
//           } else {
//             console.error("Failed to fetch slots:", response.data.message);
//           }
//         } catch (error) {
//           console.error("Error fetching slots:", error);
//           alert("Failed to fetch available slots. Please try again.");
//         } finally {
//           setLoading(false);
//         }
//       };
    


  


//       useEffect(() => {
//             if (selectedStylist && selectedDate && selectedServices) {
//               fetchAvailableSlots();
//             }
//           }, [selectedStylist, selectedDate,selectedServices]);
        
        

// console.log('====================================');
// console.log(availableSlots);
// console.log('====================================');


//   const stylists = selectedSalon.staffs || [];
//   const products = selectedSalon.products || []
//   const service = selectedSalon.services || []

//   const handleDateChange = (event, date) => {
//     if (Platform.OS === 'android') {
//       setDatePickerVisible(false);
//     }
//     if (date) {
//       setSelectedDate(date);
//     }
//   };




//   const handleBooking = () => {
//     if (!selectedDate || !selectedStylist || !selectedSlot || selectedServices.length === 0) {
//       alert("Please select a date, stylist, slot, and service before proceeding.");
//       return;
//     }

//     // Navigate to the next page and pass data
//     setBookingDetails({
//       salonId:selectedSalon._id,
//       stylist: selectedStylist,
//       slot: selectedSlot,
//       services: selectedServices,
//       products: selectedProducts,
//       date: selectedDate,
//     });

   
//     navigation.navigate('Payment');
//   };

  


  

//   return (
//     <ScrollView style={styles.container}
//     showsHorizontalScrollIndicator={false}>
//       {/* Header */}
//       <Text style={styles.headerText}>Book Appointment</Text>

//       {/* Date Picker */}
//       <TouchableOpacity
//         style={styles.datePickerButton}
//         onPress={() => setDatePickerVisible(true)}
//       >
//         <Text style={styles.datePickerText}>
//           {selectedDate.toDateString()}
//         </Text>
//       </TouchableOpacity>
//       {isDatePickerVisible && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//         />
//       )}


//  {/* Services Section */}

// <Text style={styles.sectionTitle}>Choose a Service</Text>
// <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesContainer}>
//   {service.length > 0 ? (
//     service.map((ser, index) => (
//       <TouchableOpacity
//         key={index}
//         style={[
//           styles.serviceItem,
//           selectedServices.includes(ser.name) && styles.selectedServiceItem, // Highlight selected services
//         ]}
//         onPress={() => handleSelectService(ser.name)} // Toggle service selection
//       >
//         <Text style={styles.serviceName}>{ser.name}</Text>
//         <Text style={styles.serviceDuration}>Duration: {ser.duration} mins</Text>
//         <Text style={styles.servicePrice}>₹{ser.price}</Text>
//       </TouchableOpacity>
//     ))
//   ) : (
//     <Text style={styles.noItemsText}>No services available.</Text>
//   )}
// </ScrollView>
    



// <Text style={styles.sectionTitle}>Choose Hair Specialist</Text>
// <ScrollView 
//   horizontal 
//   showsHorizontalScrollIndicator={false} 
//   style={styles.stylistsContainer}
// >
//   {stylists.map((stylist, index) => (
//     <TouchableOpacity
//       key={stylist._id || index} 
//       style={[
//         styles.stylistItem,
//         selectedStylist === stylist._id && styles.selectedStylistItem, // Ensure correct stylist is selected
//       ]}
//       onPress={() => setSelectedStylist(stylist._id)} // Use _id to avoid ambiguity
//     >
//       <Image
//         source={{
//           uri: stylist.image || 'https://via.placeholder.com/100', // Placeholder for missing images
//         }}
//         style={styles.stylistImage}
//       />
//       <Text style={styles.stylistName}>{stylist.name}</Text>
//     </TouchableOpacity>
//   ))}
// </ScrollView>













//       {/* Time Slots */}
//       <Text style={styles.sectionTitle}>Available Slots</Text>
// {availableSlots.length > 0 ? (
//   <View style={styles.slotsContainer}>
//     {availableSlots.map((slot, index) => (
//       <TouchableOpacity
//         key={index}
//         style={[
//           styles.slotItem,
//           selectedSlot === slot.time && styles.selectedSlotItem,
//           slot.isBooked && styles.bookedSlotItem, // Different style for booked slots
//         ]}
//         onPress={() => !slot.isBooked && setSelectedSlot(slot.time)} 
//       >
//         <Text style={styles.slotText}>{slot.time}</Text>
//         {slot.isBooked && <Text style={styles.bookedText}>(Booked)</Text>}
//       </TouchableOpacity>
//     ))}
//   </View>
// ) : (
//   <Text >No slots available for this date.</Text>
// )}








// <Text style={styles.sectionTitle}>Choose  Products</Text>
//     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsContainer}>
//       {products.length > 0 ? (
//         products.map((product) => (
//           <TouchableOpacity
//             key={product._id}
//             style={[
//               styles.productItem,
//               selectedProducts.includes(product._id) && styles.selectedProductItem, // Highlight selected items
//             ]}
//             onPress={() => toggleProductSelection(product._id)} // Toggle selection
//           >
//             <Text style={styles.productName}>{product.name}</Text>
//             <Text style={styles.productPrice}>₹{product.price}</Text>
//           </TouchableOpacity>
//         ))
//       ) : (
//         <Text style={styles.noItemsText}>No products available.</Text>
//       )}
//     </ScrollView>
  





    
// <TouchableOpacity style={styles.bookButton} onPress={handleBooking} disabled={loading}>
//   <Text style={styles.bookButtonText}>{loading ? "Booking..." : "Book Appointment"}</Text>
// </TouchableOpacity>

//     </ScrollView>
//   );
// };

// export default SalonDetails;



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f8f8f8',
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 16,
//   },
//   datePickerButton: {
//     padding: 10,
//     backgroundColor: '#eaeaea',
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   datePickerText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginVertical: 10,
//   },
//   // Stylist Section
//   stylistsContainer: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   stylistItem: {
//     alignItems: 'center',
//     marginRight: 10,
//     padding: 10,
//     backgroundColor: '#eaeaea',
//     borderRadius: 8,
//   },
//   selectedStylistItem: {
//     backgroundColor: '#5d89ba',
//   },
//   stylistImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginBottom: 5,
//   },
//   stylistName: {
//     fontSize: 14,
//     color: '#333',
//   },
//   // Slots Section
//   slotsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 16,
//   },
//   slotItem: {
//     padding: 10,
//     backgroundColor: '#eaeaea',
//     borderRadius: 8,
//     marginRight: 10,
//     marginBottom: 10,
//   },
//   selectedSlotItem: {
//     backgroundColor: '#5d89ba',
//   },
//   bookedSlotItem: {
//     backgroundColor: '#ccc',
//   },
//   slotText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   bookedText: {
//     fontSize: 12,
//     color: '#666',
//   },
//   noSlotsText: {
//     fontSize: 14,
//     color: '#888',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   // Services Section
//   servicesContainer: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   serviceItem: {
//     alignItems: 'center',
//     marginRight: 10,
//     padding: 10,
//     backgroundColor: '#eaeaea',
//     borderRadius: 8,
//   },
//   selectedServiceItem: {
//     backgroundColor: '#5d89ba',
//   },
//   serviceImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//     marginBottom: 5,
//   },
//   serviceName: {
//     fontSize: 14,
//     color: '#333',
//     textAlign: 'center',
//   },
//   serviceDuration: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//   },
//   servicePrice: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   noItemsText: {
//     fontSize: 14,
//     color: '#888',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   // Products Section
//   productsContainer: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   productItem: {
//     alignItems: 'center',
//     marginRight: 10,
//     padding: 10,
//     backgroundColor: '#eaeaea',
//     borderRadius: 8,
//   },
//   selectedProductItem: {
//     backgroundColor: '#5d89ba',
//   },
//   productImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//     marginBottom: 5,
//   },
//   productName: {
//     fontSize: 14,
//     color: '#333',
//     textAlign: 'center',
//   },
//   productPrice: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   // Booking Button
//   bookButton: {
//     padding: 15,
//     backgroundColor: '#5d89ba',
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   bookButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// });


































import React, { useState,useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSalonContext } from '../salonContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { BookingContext } from '../BookingContext';
import instance from '../instance';



const SalonDetails = () => {
  const [userId, setUserId] = useState(null);
  const [username,setusername]= useState()
  const { selectedSalon } = useSalonContext();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const[availableSlots,setAvailableSlots]=useState([])
  const [selectedStylist, setSelectedStylist] = useState(null);
  const navigation= useRouter()
  const { setBookingDetails } = useContext(BookingContext);
  const [selectedGender, setSelectedGender] = useState(null);

  const [selectedServices, setSelectedServices] = useState([]); 



  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  console.log('====================================');
  console.log(selectedOptions);
  console.log('====================================');



  const getFilteredOptions = () => {
    if (selectedServices.length === 0 || !selectedGender) return [];

    // Filter the services based on selected services array
    const filteredServices = selectedSalon.services.filter((service) =>
      selectedServices.includes(service.name)
    );

    // Filter options based on gender for the selected services
    const options = filteredServices.flatMap((service) =>
      service?.options?.filter((option) => option.gender === selectedGender) || []
    );

    return options;
  };

  const filteredOptions = getFilteredOptions();


  console.log('====================================');
  console.log(filteredOptions,"got it..............");
  console.log('====================================');

console.log('====================================');
console.log(selectedSalon);
console.log('====================================');



const toggleProductSelection = (productId) => {
  setSelectedProducts((prevSelected) =>
    prevSelected.includes(productId)
      ? prevSelected.filter((id) => id !== productId) 
      : [...prevSelected, productId] 
  );
};



const toggleOptionSelection = (optionId) => {
  setSelectedOptions((prevSelected) =>
    prevSelected.includes(optionId)
      ? prevSelected.filter((id) => id !== optionId)
      : [...prevSelected, optionId]
  );
};







console.log('====================================');
console.log(filteredOptions, "got it !!!!!!!!!!!!!!!!!");
console.log('====================================');












console.log('====================================');
console.log(selectedServices);
console.log('====================================');


console.log('====================================');
console.log(selectedGender);
console.log('====================================');

// Function to toggle selection of a service
const handleSelectService = (serviceName) => {
  setSelectedServices((prevSelected) => {
    if (prevSelected.includes(serviceName)) {
      return prevSelected.filter((service) => service !== serviceName);
    } else {
      return [...prevSelected, serviceName];
      
    }
  });
};




useEffect(() => {
  const fetchUserId = async () => {
    try {
      const storedUserId = await AsyncStorage.getItem('userId');
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUserId && storedUsername) {
        setUserId(storedUserId);  
        setusername(storedUsername)
      } else {
        console.log('No userId found');
      }
    } catch (error) {
      console.error('Error fetching userId from AsyncStorage:', error);
    }
  };

  fetchUserId();
}, []);

console.log('=============Hiiiiiii=======================');
console.log(selectedSlot);
console.log('====================================');

  const [loading, setLoading] = useState(false);


  console.log('====================================');
  console.log(selectedDate);
  console.log('====================================');

console.log('====================================');
console.log(selectedStylist);
console.log('====================================');

console.log('====================================');
console.log(selectedOptions,"jjjjj");
console.log('====================================');



  const fetchAvailableSlots = async () => {
        setLoading(true);
        const formattedDate = new Date(selectedDate).toISOString().replace('Z', '+00:00');
        console.log('====================================');
        console.log(formattedDate,"akshay");
        console.log('====================================');
        try {
          const body = {
          
           
            date: formattedDate,
            stylistId: selectedStylist,
            optionNames: selectedOptions,
            serviceNames:selectedServices
          };
          console.log(body,"hdsjks");
          
          const response = await instance.post(`/salons/${selectedSalon._id}/available-slots`, body);
          console.log(response);
    
          if (response.status === 200) {
            const slotsWithAvailability = response.data.slots.map((slot) => ({
              time: slot, 
              
            }));
            setAvailableSlots(slotsWithAvailability);
          } else {
            console.error("Failed to fetch slots:", response.data.message);
          }
        } catch (error) {
          console.error("Error fetching slots:", error);
          alert("Failed to fetch available slots. Please try again.");
        } finally {
          setLoading(false);
        }
      };
    
  
      useEffect(() => {
        if (selectedStylist && selectedDate && selectedServices.length ) {
          fetchAvailableSlots();
        }
      }, [selectedStylist, selectedDate, selectedServices, selectedOptions]);
      
        

console.log('====================================');
console.log(availableSlots);
console.log('====================================');


  const stylists = selectedSalon.staffs || [];
  const products = selectedSalon.products || []
  const service = selectedSalon.services || []

  const handleDateChange = (event, date) => {
    if (Platform.OS === 'android') {
      setDatePickerVisible(false);
    }
    if (date) {
      setSelectedDate(date);
    }
  };




  const handleBooking = () => {
    if (!selectedDate || !selectedStylist || !selectedSlot || selectedServices.length === 0 |selectedOptions.length === 0) {
      alert("Please select a date, stylist, slot, and service before proceeding.");
      return;
    }

    // Navigate to the next page and pass data
    setBookingDetails({
      salonId:selectedSalon._id,
      stylist: selectedStylist,
      slot: selectedSlot,
      services: selectedServices,
      products: selectedProducts,
      date: selectedDate,
    });

   
    navigation.navigate('Payment');
  };

  


  

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1 }}
  >
    <ScrollView style={styles.container}
    showsHorizontalScrollIndicator={false}>
      {/* Header */}
      <Text style={styles.headerText}>Book Appointment</Text>

      {/* Date Picker */}
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setDatePickerVisible(true)}
      >
        <Text style={styles.datePickerText}>
          {selectedDate.toDateString()}
        </Text>
      </TouchableOpacity>
      {isDatePickerVisible && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}


 {/* Services Section */}

{/* <Text style={styles.sectionTitle}>Choose a Service</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesContainer}>
  {service.length > 0 ? (
    service.map((ser, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.serviceItem,
          selectedServices.includes(ser.name) && styles.selectedServiceItem, // Highlight selected services
        ]}
        onPress={() => handleSelectService(ser.name)} // Toggle service selection
      >
        <Text style={styles.serviceName}>{ser.name}</Text>
        <Text style={styles.serviceName}>{ser.offers.discountPercentage}%</Text>

      </TouchableOpacity>
    ))
  ) : (
    <Text style={styles.noItemsText}>No services available.</Text>
  )}
</ScrollView> */}
{/* <Text style={styles.sectionTitle}>Choose a Service</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesContainer}>
  {service.length > 0 ? (
    service.map((ser, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.serviceItem,
          selectedServices.includes(ser.name) && styles.selectedServiceItem, // Highlight selected services
        ]}
        onPress={() => handleSelectService(ser.name)} // Toggle service selection
      >
        <Text style={styles.serviceName}>{ser.name}</Text>
        {ser.offers.discountPercentage > 0 && ( // Conditionally render the discount percentage
          <Text style={styles.discountText}>{ser.offers.discountPercentage}% OFF</Text>
        )}
      </TouchableOpacity>
    ))
  ) : (
    <Text style={styles.noItemsText}>No services available.</Text>
  )}
</ScrollView> */}



<Text style={styles.sectionTitle}>Choose a Service</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesContainer}>
  {service.length > 0 ? (
    service.map((ser, index) => {
      const currentDate = new Date();
      const endDate = new Date(ser.offers.endDate);

      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.serviceItem,
            selectedServices.includes(ser.name) && styles.selectedServiceItem, // Highlight selected services
          ]}
          onPress={() => handleSelectService(ser.name)} // Toggle service selection
        >
          <Text style={styles.serviceName}>{ser.name}</Text>
          {/* Only show the discount percentage if it's greater than 0 and endDate has not passed */}
          {ser.offers.discountPercentage > 0 && currentDate <= endDate && (
            <Text style={styles.discountText}>{ser.offers.discountPercentage}% OFF</Text>
          )}
        </TouchableOpacity>
      );
    })
  ) : (
    <Text style={styles.noItemsText}>No services available.</Text>
  )}
</ScrollView>






<Text style={styles.sectionTitle}>Choose Gender</Text>
      <View style={styles.genderContainer}>
        {['Male', 'Female', 'Unisex'].map((gender) => (
          <TouchableOpacity
            key={gender}
            style={[styles.genderOption, selectedGender === gender && styles.selectedGender]}
            onPress={() => setSelectedGender(gender)}
          >
            <Text style={styles.genderText}>{gender}</Text>
          </TouchableOpacity>
        ))}
      </View>



      <Text style={styles.sectionTitle}>Choose Options</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsContainer}>
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <TouchableOpacity
              key={option._id}
              style={[
                styles.productItem, 
                selectedOptions.includes(option.name) && styles.selectedProductItem // Highlight selected items
              ]}
              onPress={() => toggleOptionSelection(option.name)} // Toggle selection
            >
              <Text style={styles.productName}>{option.name}</Text>
              <Text style={styles.productPrice}>₹{option.price}</Text>
              <Text style={styles.serviceDuration}>Duration: {option.timeRequired} mins</Text>

            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noItemsText}>No options available</Text>
        )}
      </ScrollView>
    



<Text style={styles.sectionTitle}>Choose Hair Specialist</Text>
<ScrollView 
  horizontal 
  showsHorizontalScrollIndicator={false} 
  style={styles.stylistsContainer}
>
  {stylists.map((stylist, index) => (
    <TouchableOpacity
      key={stylist._id || index} 
      style={[
        styles.stylistItem,
        selectedStylist === stylist._id && styles.selectedStylistItem, // Ensure correct stylist is selected
      ]}
      onPress={() => setSelectedStylist(stylist._id)} // Use _id to avoid ambiguity
    >
      <Image
        source={{
          uri: stylist.image || `http://192.168.1.6:8000/${stylist.staffImage}`, // Placeholder for missing images
        }}
        style={styles.stylistImage}
      />
      <Text style={styles.stylistName}>{stylist.staffName}</Text>
    </TouchableOpacity>
  ))}
</ScrollView>













      {/* Time Slots */}
      <Text style={styles.sectionTitle}>Available Slots</Text>
{availableSlots.length > 0 ? (
  <View style={styles.slotsContainer}>
    {availableSlots.map((slot, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.slotItem,
          selectedSlot === slot.time && styles.selectedSlotItem,
          slot.isBooked && styles.bookedSlotItem, // Different style for booked slots
        ]}
        onPress={() => !slot.isBooked && setSelectedSlot(slot.time)} 
      >
        <Text style={styles.slotText}>{slot.time}</Text>
        {slot.isBooked && <Text style={styles.bookedText}>(Booked)</Text>}
      </TouchableOpacity>
    ))}
  </View>
) : (
  <Text >No slots available for this date.</Text>
)}








<Text style={styles.sectionTitle}>Choose  Products</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsContainer}>
      {products.length > 0 ? (
        products.map((product) => (
          <TouchableOpacity
            key={product._id}
            style={[
              styles.productItem,
              selectedProducts.includes(product._id) && styles.selectedProductItem, // Highlight selected items
            ]}
            onPress={() => toggleProductSelection(product._id)} // Toggle selection
          >
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>₹{product.price}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noItemsText}>No products available.</Text>
      )}
    </ScrollView>
  





    
<TouchableOpacity style={styles.bookButton} onPress={handleBooking} disabled={loading}>
  <Text style={styles.bookButtonText}>{loading ? "Booking..." : "Book Appointment"}</Text>
</TouchableOpacity>
<Text></Text>

    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SalonDetails;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  datePickerButton: {
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  datePickerText: {
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  // Stylist Section
  stylistsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  stylistItem: {
    alignItems: 'center',
    marginRight: 10,
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
  },
  selectedStylistItem: {
    backgroundColor: '#5d89ba',
  },
  stylistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  stylistName: {
    fontSize: 14,
    color: '#333',
  },
  // Slots Section
  slotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  slotItem: {
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedSlotItem: {
    backgroundColor: '#5d89ba',
  },
  bookedSlotItem: {
    backgroundColor: '#ccc',
  },
  slotText: {
    fontSize: 16,
    color: '#333',
  },
  bookedText: {
    fontSize: 12,
    color: '#666',
  },
  noSlotsText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 10,
  },
  // Services Section
  servicesContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  serviceItem: {
    alignItems: 'center',
    marginRight: 10,
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
  },
  selectedServiceItem: {
    backgroundColor: '#5d89ba',
  },
  serviceImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 5,
  },
  serviceName: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  serviceDuration: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  servicePrice: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noItemsText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 10,
  },
  // Products Section
  productsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  productItem: {
    alignItems: 'center',
    marginRight: 10,
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
  },
  selectedProductItem: {
    backgroundColor: '#5d89ba',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 5,
  },
  productName: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Booking Button
  bookButton: {
    padding: 15,
    backgroundColor: '#5d89ba',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    marginVertical: 16,
  },
  bookButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  genderContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // marginVertical: 10,
    marginBottom: 16,
  },
  genderOption: {
    alignItems: 'center',
    marginRight: 10,
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
  },
  selectedGender: {
    backgroundColor: '#5d89ba',
  },
  genderText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  discountText: {
    fontSize: 14,
    fontWeight: 'bold', // Make it bold
    color: '#ff4500', // Highlight in red
    marginTop: 5,
  }
});






