import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './ParentComponent';

function Form() {
  const { name, setName, email, setEmail, phoneNumber, setPhoneNumber, dob, setDob, data, setData, isUpdate,setIsUpdate } = useContext(UserContext);
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    const newEntry = { id: data.length + 1, name, email, phoneNumber, dob };
    setData([...data, newEntry]);
    setName('');
    setEmail('');
    setPhoneNumber('');
    setDob('');
    navigate('/detail');
  };

  const againhandleUpdate = () =>{
    const index = data.map((items) =>{
      return items.id;
    }).indexOf(id);

    const dt = [...data];
    dt[index].name = name;
    dt[index].email = email;
    dt[index].phoneNumber = phoneNumber;
    dt[index].dob = dob;
    setData(dt);
  }

  return (
    <div className="h-screen flex items-center flex-col justify-center md:justify-center text-white">
      <div className="w-[300px] rounded-md border border-orange-500 shadow-2xl flex items-center justify-center flex-col">
        <h1 className="items-center m-2 font-bold">Fill the details of the Entity</h1>
        <form onSubmit={handleCreate}>
          <div className="m-5">
            <label className="flex items-center justify-center flex-col">
              Name:
              <div className="m-1 text-black flex items-center justify-center">
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
              </div>
            </label>
          </div>
          <div className="m-5">
            <label className="flex items-center justify-center flex-col">
              Email:
              <div className="m-1 text-black">
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
            </label>
          </div>
          <div className="m-5">
            <label className="flex items-center justify-center flex-col">
              Phone Number:
              <div className="m-1 text-black">
                <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
              </div>
            </label>
          </div>
          <div className="m-5">
            <label className="flex items-center justify-center flex-col">
              Date of Birth:
              <div className="m-1 text-black">
                <input type="text" onChange={(e) => setDob(e.target.value)} value={dob} />
              </div>
            </label>
          </div>
          <div className="m-5 flex items-center justify-center flex-col">

            {
              !isUpdate ?
              <button type="submit" className="bg-orange-500 rounded-2xl w-20 h-7 shadow-2xl flex items-center justify-center flex-col">
                Create
              </button> :
              <button onClick={againhandleUpdate} type="submit" className="bg-orange-500 rounded-2xl w-20 h-7 shadow-2xl flex items-center justify-center flex-col">
                Update
              </button>
            }
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
