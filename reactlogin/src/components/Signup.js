import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './signup.css'

export default function Signup() {

  let [createAccData, setCreateAccData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCreateAccData({
      ...createAccData,
      [e.target.name]: e.target.value,
    });
    console.log(createAccData);
  };
 
  const sendData = async () => {
    console.log("test user creation", createAccData)
    console.log("before axios")
    try {
      let res = await axios.post("/user", createAccData);
      console.log("res", res)

      navigate("/");

    } catch (error) {
      console.log(error);
    }


  };
  return (
    <div className="acc_v">
      
      {/* <div className="contain_v"> */}
        <h2> Create Account:</h2>
        <div className="acc_details">
          <label> Enter your name </label><br></br>
          <input type="text" name="name" onChange={handleChange} /><br></br>
          <label> Enter your email address </label><br></br>
          <input type="text" name="email" onChange={handleChange} /><br></br>
          <label> Enter your password </label><br></br>
          <input type="password" name="password" onChange={handleChange} /><br></br>
          <input type="Submit" className="acc_submit" value="Submit" onClick={sendData} />
        </div>
      {/* </div> */}

    </div>

  )
}