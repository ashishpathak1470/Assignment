import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './ParentComponent';
import axios from 'axios';

function Form() {
  const {
    addFormData,
    updateFormData,
    name, setName,
    email, setEmail,
    phoneNumber, setPhoneNumber,
    dob, setDob,
    data,
    isUpdate,
    id,
    setIsUpdate
  } = useContext(UserContext);
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const newEntry = { name, email, phoneNumber, dob };

    try {
      const response = await axios.post('http://localhost:5001/api/create', newEntry);
      newEntry.id = response.data.userId; // Set the ID returned from the server
      addFormData(newEntry);
      navigate('/detail');
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedEntry = { id, name, email, phoneNumber, dob };

    try {
      await axios.put(`http://localhost:5001/api/update/${id}`, updatedEntry);
      updateFormData(updatedEntry);
      setIsUpdate(false);
      navigate('/detail');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="h-screen flex items-center flex-col justify-center md:justify-center text-white">
      <div className="w-[300px] rounded-md border border-orange-500 shadow-2xl flex items-center justify-center flex-col">
        <h1 className="items-center m-2 font-bold">Fill the details of the Entity</h1>
        <form onSubmit={isUpdate ? handleUpdate : handleCreate}>
          <div className="m-5">
            <label className="flex items-center justify-center flex-col">
              Name:
              <div className="m-1 text-black flex items-center justify-center">
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />
              </div>
            </label>
          </div>
          <div className="m-5">
            <label className="flex items-center justify-center flex-col">
              Email:
              <div className="m-1 text-black">
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
              </div>
            </label>
          </div>
          <div className="m-5">
            <label className="flex items-center justify-center flex-col">
              Phone Number:
              <div className="m-1 text-black">
                <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} required />
              </div>
            </label>
          </div>
          <div className="m-5">
            <label className="flex items-center justify-center flex-col">
              Date of Birth:
              <div className="m-1 text-black">
                <input type="date" onChange={(e) => setDob(e.target.value)} value={dob} required />
              </div>
            </label>
          </div>
          <div className="m-5 flex items-center justify-center flex-col">
            <button type="submit" className="bg-orange-500 rounded-2xl w-20 h-7 shadow-2xl flex items-center justify-center flex-col">
              {isUpdate ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
