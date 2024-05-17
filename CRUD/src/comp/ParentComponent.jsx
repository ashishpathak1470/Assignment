import React, { createContext, useState } from 'react';

export const UserContext = createContext();

function ParentComponent({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [id, setId] = useState('');
  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <UserContext.Provider value={{ name, setName, email, setEmail, phoneNumber, setPhoneNumber, dob, setDob, id, setId, data, setData,isUpdate, setIsUpdate}}>
      {children}
    </UserContext.Provider>
  );
}

export default ParentComponent;
