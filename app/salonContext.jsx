import React, { createContext, useState, useContext } from 'react';

// Create a context to hold the salon data
const SalonContext = createContext();

export const useSalonContext = () => {
  return useContext(SalonContext);
};

// Create a provider component
export const SalonProvider = ({ children }) => {
  const [selectedSalon, setSelectedSalon] = useState(null);

  const setSalon = (salon) => {
    setSelectedSalon(salon);  // Update the selected salon data
  };

  return (
    <SalonContext.Provider value={{ selectedSalon, setSalon }}>
      {children}
    </SalonContext.Provider>
  );
};
