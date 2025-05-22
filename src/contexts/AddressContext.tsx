
import React, { createContext, useContext, useState } from 'react';

export interface DeliveryAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  pincode: string;
  notes?: string;
}

interface AddressContextType {
  deliveryAddress: DeliveryAddress | null;
  saveDeliveryAddress: (address: DeliveryAddress) => void;
  clearDeliveryAddress: () => void;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const AddressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress | null>(null);

  const saveDeliveryAddress = (address: DeliveryAddress) => {
    setDeliveryAddress(address);
  };

  const clearDeliveryAddress = () => {
    setDeliveryAddress(null);
  };

  return (
    <AddressContext.Provider value={{ deliveryAddress, saveDeliveryAddress, clearDeliveryAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (context === undefined) {
    throw new Error('useAddress must be used within an AddressProvider');
  }
  return context;
};
