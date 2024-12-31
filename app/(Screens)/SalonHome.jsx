


// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import axios from 'axios';
// import { useNavigation } from 'expo-router';


// const SalonHome = ({ username }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [salons, setSalons] = useState([]);
//   const [filteredSalons, setFilteredSalons] = useState([]); // Stores filtered salons

//   // Function to handle search input
//   const handleSearchChange = (text) => {
//     setSearchQuery(text);

//     // Perform filtering in real-time
//     const query = text.toLowerCase();
//     const filtered = salons.filter(
//       (salon) =>
//         salon.salonName.toLowerCase().includes(query) || 
//         salon.location.toLowerCase().includes(query)
//     );
//     setFilteredSalons(filtered);
//   };

//   const fetchSalons = async () => {
//     try {
//       const response = await axios.get('http://192.168.1.22:8000/getsalons');
//       setSalons(response.data.salons);
//       setFilteredSalons(response.data.salons); 
//     } catch (error) {
//       console.error('Error fetching salons:', error);
//     }
//   };

//   useEffect(() => {
//     fetchSalons();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* Profile Section */}
//       <View style={styles.profileContainer}>
//         <TouchableOpacity onPress={() => setIsDrawerOpen(!isDrawerOpen)}>
//           <Image
//             source={{
//               uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
//             }}
//             style={styles.profileImage}
//           />
//         </TouchableOpacity>
//         <Text style={styles.username}>{username}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search by name or location"
//           placeholderTextColor="#999"
//           value={searchQuery}
//           onChangeText={handleSearchChange}
//         />
//       </View>

//       {/* Main Content */}
//       <Text style={styles.mainContentText}>Available Salons:</Text>
//       <ScrollView contentContainerStyle={styles.salonsContainer} showsVerticalScrollIndicator={false}>
//         {filteredSalons.map((salon, index) => (
//           <TouchableOpacity key={index} style={styles.card} onPress={() => alert(`Clicked on ${salon.salonName}`)}>
//             <Image source={{ uri: `http://192.168.1.22:8000/uploads/${salon.image}` }} style={styles.cardImage} />
//             <Text style={styles.cardText}>{salon.salonName}</Text>
//             <Text style={styles.cardTextSmall}>{salon.location}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 40,
//     marginRight: 10,
//   },
//   username: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#CCC',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     marginRight: 10,
//     backgroundColor: '#FFF',
//   },
//   mainContentText: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 10,
//   },
//   salonsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   card: {
//     width: '48%',
//     marginBottom: 20,
//     backgroundColor: '#f8f8f8',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 2, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//     overflow: 'hidden',
//   },
//   cardImage: {
//     width: '100%',
//     height: 120,
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//   },
//   cardText: {
//     padding: 10,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//   },
//   cardTextSmall: {
//     fontSize: 14,
//     color: '#555',
//     textAlign: 'center',
//   },
// });

// export default SalonHome;





import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation, useRouter } from 'expo-router';
import { useSalonContext } from '../salonContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import instance from '../instance';



const SalonHome = ({ username ,image }) => {
  console.log('====================================');
  console.log(image);
  console.log('====================================');
 
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [salons, setSalons] = useState([]);
  const [filteredSalons, setFilteredSalons] = useState([]);
  const navigation = useNavigation()
  const router = useRouter()
  const { setSalon } = useSalonContext();
  // Handle search input
  const handleSearchChange = (text) => {
    setSearchQuery(text);

    // Filter salons based on search query
    const query = text.toLowerCase();
    const filtered = salons.filter(
      (salon) =>
        salon.salonName.toLowerCase().includes(query) ||
        salon.location.toLowerCase().includes(query)
    );
    setFilteredSalons(filtered);
  };

  // Toggle drawer visibility
  const handleProfileClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Fetch salon data
  const fetchSalons = async () => {
    try {
      const response = await instance.get('/getsalons');
      setSalons(response.data.salons);
      setFilteredSalons(response.data.salons); 
    } catch (error) {
      console.error('Error fetching salons:', error);
    }
  };

  useEffect(() => {
    fetchSalons();
  }, []);

  const handleLogout = async () => {
    try {
     
      router.replace('LoginScreen'); 
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
console.log('====================================');
console.log(salons);
console.log('====================================');
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleProfileClick}>
          <Image
            source={{
              uri: `http://192.168.1.6:8000/uploads/${image}`,
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.username}>{username}</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or location"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
      </View>

      {/* Main Content */}
      <Text style={styles.mainContentText}>Available Salons:</Text>
      <ScrollView
        contentContainerStyle={styles.salonsContainer}
        showsVerticalScrollIndicator={false}
      >
      
{filteredSalons.map((salon, index) => {
  const discountOffer = salon.services.map((item)=>item.offers)?.find(offer =>   offer?.discountPercentage > 0 &&
    new Date(offer.endDate) > new Date() );
 console.log('====================================');
 console.log(discountOffer,"kittyy");
 console.log('====================================');
 
 
  return (
    <TouchableOpacity
      key={index}
      style={styles.card}
      onPress={() => {
        setSalon(salon);
        router.navigate('SalonDetails', { salon });
      }}
    >
      <Image
        source={{ uri: `http://192.168.1.4:8000/uploads/${salon.image}` }}
        style={styles.cardImage}
      />
      <Text style={styles.cardText}>{salon.salonName}</Text>
      <Text style={styles.cardTextSmall}>{salon.location}</Text>
      {/* Display discount percentage if available */}
      {discountOffer && (
        <Text style={styles.discountText}>
          {discountOffer.discountPercentage}% OFF
        </Text>
      )}
    </TouchableOpacity>
  );
})}

      </ScrollView>

      {/* Drawer */}
      {isDrawerOpen && (
        <View style={styles.drawerContainer}>
          <TouchableOpacity onPress={handleProfileClick} style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>

          {/* Profile Info */}
          <View style={styles.profileInfo}>
            <Image
              source={{
                uri: `http://192.168.1.6:8000/uploads/${image}`,
              }}
              style={styles.drawerProfileImage}
            />
            <Text style={styles.drawerUsername}>{username}</Text>
          </View>

          {/* Drawer Options */}
          <TouchableOpacity style={styles.sidebarItem}>
            <Icon name="cogs" size={20} color="#333" />
            <Text style={styles.sidebarText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.sidebarItem}>
            <Icon name="sign-out" size={20} color="#333" />
            <Text style={styles.sidebarText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  mainContentText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#ccc',
  },
  salonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardText: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  cardTextSmall: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    height: '110%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  drawerProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  drawerUsername: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#ccc',
  },
  sidebarText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  option: {
    marginVertical: 10,
  },
  optionText: {
    fontSize: 18,
    color: 'black',
  },
  discountText: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  
});

export default SalonHome;






