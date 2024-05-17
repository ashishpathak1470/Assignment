import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

function ParentComponent({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const addFormData = (newData) => {
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
    setId(id + 1);
  };

  const updateFormData = (updatedEntry) => {
    const updatedData = data.map((entry) =>
      entry.id === updatedEntry.id ? updatedEntry : entry
    );
    setData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
  };

  const deleteFormData = (id) => {
    const updatedData = data.filter((entry) => entry.id !== id);
    setData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
  };

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <UserContext.Provider value={{
      addFormData,
      updateFormData,
      deleteFormData,
      name, setName,
      email, setEmail,
      phoneNumber, setPhoneNumber,
      dob, setDob,
      id, setId,
      data, setData,
      isUpdate, setIsUpdate
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default ParentComponent;
