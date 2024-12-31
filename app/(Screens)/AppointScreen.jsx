

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { useAppointment } from '../AppointmentContext';
import instance from '../instance';

const AppointScreen = ({ username,userId,image }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [appointments, setAppointments] = useState([]); // State to hold appointments
  const [loading, setLoading] = useState(true); // State for loading indicator
  const router = useRouter();
  const { setSelectedAppointment } = useAppointment();


  // Toggle drawer visibility
  const handleProfileClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = async () => {
    try {
      router.replace('LoginScreen');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // Fetch appointments for the user
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await instance.get(`/bookings/${userId}`);  // Replace with your actual API URL
        setAppointments(response.data);  // Set the response data into state
        setLoading(false);  // Stop loading indicator
      } catch (error) {
        // console.error('Error fetching appointments:', error);
        setLoading(false);  // Stop loading indicator
      }
    };

    fetchAppointments();
  }, [username]);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment); // Store the clicked appointment in context
    router.push('AppointmentDetails'); // Navigate to the details screen
  };



return (
    <View style={styles.container}>
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
                uri:`http://192.168.1.4:8000/uploads/${image}`,
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
  
      {/* Main Content */}
      {!isDrawerOpen && (
        <>
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
  
          {/* Appointment List Section */}
          <ScrollView style={styles.appointmentList}
          showsVerticalScrollIndicator={false}
          >
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              appointments.map((appointment) => (
                <TouchableOpacity
                  key={appointment._id}
                  style={styles.appointmentCard}
                  onPress={() => handleAppointmentClick(appointment)}
                >
                  <Text style={styles.appointmentTitle}>{appointment.serviceNames.join(', ')}</Text>
                  <Text style={styles.appointmentTime}>{appointment.slot}</Text>
                </TouchableOpacity>
              ))
            )}
          </ScrollView>
        </>
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
  drawerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    height: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    zIndex: 10, // Ensures the drawer is above other content
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
  appointmentList: {
    marginTop: 30,
  },
  appointmentCard: {
    backgroundColor: '#f9f9f9',
    padding: 25,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  appointmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  appointmentTime: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default AppointScreen;
