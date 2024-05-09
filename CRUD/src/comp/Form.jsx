import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dob: ""
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass formData to the next page using React Router
    history.push({
      pathname: "/display",
      state: { formData }
    });
    // Alert that the data has been submitted
    alert("Your data has been submitted!");
  };

  return (
    <>
      <div className="h-screen flex items-center flex-col justify-center md:justify-center text-white">
        <div className="w-[300px] rounded-md border border-orange-500 shadow-2xl">
          <h1 className="items-center m-2 font-bold">Fill the details of the Entity</h1>
          <form onSubmit={handleSubmit}>
            <div className="m-5">
              <label>
                Name
                <div className="m-1 text-black">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
              </label>
            </div>
            <div className="m-5">
              <label>
                Email
                <div className="m-1 text-black">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
              </label>
            </div>
            <div className="m-5">
              <label>
                Phone Number
                <div className="m-1 text-black">
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </div>
              </label>
            </div>
            <div className="m-5">
              <label>
                Date of Birth
                <div className="m-1 text-black">
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                </div>
              </label>
            </div>
            <div className="m-5">
              <button type="submit" className="bg-orange-500 rounded-2xl w-20 h-7 shadow-2xl text-center">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
