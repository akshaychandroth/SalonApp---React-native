import React, { createContext, useState, useContext } from 'react';

// Create Appointment Context
const AppointmentContext = createContext();

// Create a provider component
export const AppointmentProvider = ({ children }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <AppointmentContext.Provider value={{ selectedAppointment, setSelectedAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

// Custom hook to use the context
export const useAppointment = () => useContext(AppointmentContext);
