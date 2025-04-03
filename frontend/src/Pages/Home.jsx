import React, { useState } from 'react'
import "./Pages.css"
import {useNavigate} from "react-router-dom"
import axios from "axios";

const Home = () => {
  let url = "https://myresult-ypmk.onrender.com";
  const navigate = useNavigate();
  const [data, setData] = useState({
    email : "",
    rollNo : ""
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
};

  // send data to backend

  const ShowResultHandler = async (e) =>{
    e.preventDefault()
    const response = await axios.post(`${url}/api/student/${data.rollNo}`, {email : data.email});
    if(response.data.success){
      navigate(`/result/${data.rollNo}`)
    }else{
      alert(response.data.message)
    }
  }


  return (
    <div className='result'>
      <h2>Check Your Results</h2>
      <p>Enter your email and roll no to check your result</p>
      <form className='result-box' onSubmit={ShowResultHandler}>

        <input type="email" placeholder='Your Email' name='email' onChange={onChangeHandler} value={data.email} required/>

        <input type="number" placeholder='Your Roll Number' name='rollNo' onChange={onChangeHandler} value={data.rollNo} min={0} required/>

        <button type='Submit'>Check Result</button>
      </form>
    </div>
  )
}

export default Home
