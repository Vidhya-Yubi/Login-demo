import React from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './landing.css'

export default function Landing() {
        const navigate = useNavigate();

        async function logout_v() {

                let res = await axios.get('/logout');
                console.log(res, "res");
                navigate('/logout');
        }

        return (
                <div className="land_v">
                    <button onClick={logout_v}>Logout</button> 
                    <h1> Thank you for visiting the page!</h1>                    

                </div>
        )
}