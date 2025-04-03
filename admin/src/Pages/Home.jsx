import React, { useEffect, useState } from 'react'
import axios from "axios"

const Home = () => {
  let url = "http://localhost:3000"
  const [data, setData] = useState([]);

  const fetchData = async (e) => {
    let response = await axios.get(`${url}/api/get`);
    if (response.data.success) {
      setData(response.data.users);
      console.log(response.data.users);
    } else {
      alert("Failed to load data");
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='display-data'>
      <h3>All Students Data 👇</h3>
      <table>
        <tr id='initialRow'>
          <th>Name</th>
          <th>Email</th>
          <th>Roll No</th>
        </tr>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.rollNo}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Home