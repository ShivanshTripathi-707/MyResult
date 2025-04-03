import React, { useEffect, useState } from 'react'
import "./Pages.css"
import axios from "axios";
import { useParams } from 'react-router-dom';

const ShowResult = () => {
  const url = "https://myresult-ypmk.onrender.com";
  const { rollNo } = useParams();

  const [data, setData] = useState({})

  const displayResult = async (e) => {
    let response = await axios.get(`${url}/api/displayResult/${rollNo}`);
    if(response.data.success){
      setData(response.data.searchedUser)
    }else{
      alert("Failed to load result");
    }
  }

  useEffect(()=>{
    displayResult()
  },[])

  return (
    <div className='display-result'>
      <h1>Congratulations ! 🎉</h1>
      <p>We are congrating you and wishing the best of luck for your future if you are passed. Incase, you are failed, be motivated and try again</p>

      <div id="identity">
      <h3>Your Name : <span>{data.name}</span></h3>
      <p>Roll Number : <span>{data.rollNo}</span></p>
      </div>

      <table>
        <tr>
          <th>Subject</th>
          <th>Obtained Marks</th>
          <th>Total Marks</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>English</td>
          <td>{data.english}</td>
          <td>100</td>
          <td>{data.english < 33 ? <div className='checkFail'><span>Fail</span></div> : <div className='checkPass'><span>Pass</span></div>}</td>
        </tr>
        <tr>
          <td>Maths</td>
          <td>{data.maths}</td>
          <td>100</td>
          <td>{data.maths < 33 ? <div className='checkFail'><span>Fail</span></div> : <div className='checkPass'><span>Pass</span></div>}</td>
        </tr>
        <tr>
          <td>Physics</td>
          <td>{data.physics}</td>
          <td>100</td>
          <td>{data.physics < 33 ? <div className='checkFail'><span>Fail</span></div> : <div className='checkPass'><span>Pass</span></div>}</td>
        </tr>
        <tr>
          <td>Chemistry</td>
          <td>{data.chemistry}</td>
          <td>100</td>
          <td>{data.chemistry < 33 ? <div className='checkFail'><span>Fail</span></div> : <div className='checkPass'><span>Pass</span></div>}</td>
        </tr>
        <tr>
          <td>Hindi</td>
          <td>{data.hindi}</td>
          <td>100</td>
          <td>{data.hindi < 33 ? <div className='checkFail'><span>Fail</span></div> : <div className='checkPass'><span>Pass</span></div>}</td>
        </tr>
        <tr>
          <td>Physicl Education</td>
          <td>{data.ped}</td>
          <td>100</td>
          <td>{data.ped < 33 ? <div className='checkFail'><span>Fail</span></div> : <div className='checkPass'><span>Pass</span></div>}</td>
        </tr>
      </table>
    </div>
  )
}

export default ShowResult
