import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios";

const NewResult = () => {
  let url = "https://myresult-ypmk.onrender.com"
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    rollNo: "",  
    english: "",
    maths: "",
    physics: "",
    chemistry: "",
    hindi: "",
    ped: ""
  });

  const onChangeMarksHandler = (e) => {
    const { name, value } = e.target;
    
    // If value is empty, keep it as an empty string
    setData(prevData => ({
      ...prevData,
      [name]: value === "" ? "" : value // Do not convert to Number here
    }));
  };

  // send data to backend

  const onMarksUpdateHandler = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...data,
      rollNo: Number(data.rollNo) || 0,
      english: Number(data.english) || 0,
      maths: Number(data.maths) || 0,
      physics: Number(data.physics) || 0,
      chemistry: Number(data.chemistry) || 0,
      hindi: Number(data.hindi) || 0,
      ped: Number(data.ped) || 0
    };
    const response = await axios.post(`${url}/api/add`, formattedData);
    if(response.data.success){
      alert(response.data.message);
      navigate("/");
    }else{
      alert(response.data.message);
    }
  };

  return (
    <div className='add-student'>
      <h1>Add and Update Student</h1>
      <p>Add new student and write their marks carefully!</p>
      <form className='dataBar' onSubmit={onMarksUpdateHandler}>
        <input type="text" name='name' placeholder='Student Name' onChange={onChangeMarksHandler} value={data.name} required/>
        <input type="email" name='email' placeholder='Student Email' onChange={onChangeMarksHandler} value={data.email} required/>
        <input type="number" name='rollNo' placeholder='Assign Roll Number' min={1} onChange={onChangeMarksHandler} value={data.rollNo} required/>
        <input type="number" name="english" placeholder='English Marks' min={0} max={100} onChange={onChangeMarksHandler} value={data.english} required />
        <input type="number" name="maths" placeholder='Maths Marks' min={0} max={100} onChange={onChangeMarksHandler} value={data.maths} required />
        <input type="number" name="physics" placeholder='Physics Marks' min={0} max={100} onChange={onChangeMarksHandler} value={data.physics} required />
        <input type="number" name="chemistry" placeholder='Chemistry Marks' min={0} max={100} onChange={onChangeMarksHandler} value={data.chemistry} required />
        <input type="number" name="hindi" placeholder='Hindi Marks' min={0} max={100} onChange={onChangeMarksHandler} value={data.hindi} required />
        <input type="number" name="ped" placeholder='Physical Education Marks' min={0} max={100} onChange={onChangeMarksHandler} value={data.ped} required />
        <button type='submit'>Upload Result</button>
      </form>
    </div>
  )
}

export default NewResult
