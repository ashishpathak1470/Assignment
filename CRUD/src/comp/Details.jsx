import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './ParentComponent';

function Details() {
  const {
    name, setName,
    email, setEmail,
    phoneNumber, setPhoneNumber,
    dob, setDob,
    id, setId,
    data, setData,
    isUpdate, setIsUpdate,
    deleteFormData
  } = useContext(UserContext);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, [setData]);

  const handleUpdate = (id) => {
    const selectedItem = data.find(item => item.id === id);
    if (selectedItem) {
      setIsUpdate(true);
      setId(selectedItem.id);
      setName(selectedItem.name);
      setEmail(selectedItem.email);
      setPhoneNumber(selectedItem.phoneNumber);
      setDob(selectedItem.dob);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the Entity?")) {
      deleteFormData(id);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center md:justify-center text-white mx-20">
      {data.length > 0 ? (
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className="border-b dark:border-neutral-500" key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.dob}</td>
                <td>
                  <div className="flex">
                    <Link to="/update">
                      <button onClick={() => handleUpdate(item.id)} className="bg-orange-500 rounded-2xl w-20 h-7 shadow-2xl flex items-center justify-center flex-col hover:bg-orange-700">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(item.id)} className="bg-orange-500 rounded-2xl w-20 h-7 shadow-2xl flex items-center justify-center flex-col hover:bg-orange-700">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No datail available</div>
      )}
    </div>
  );
}

export default Details;
