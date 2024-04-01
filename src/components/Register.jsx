import { useState } from "react";
import {Link} from "react-router-dom";
import url from "../constants";
import axios from "axios";

function Register(){
    const [data, setData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confPassword : ""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setData((prevData) =>{
            return{
                ...prevData,
                [name]:value
            };
        });
    }

    async function submit(event){
        try{
            event.preventDefault();
            console.log(data);
            const result = await axios.post(url + "register", data, {
                headers : {
                    "Content-Type" : 'application/json',
                },
            });
            console.log(result);
        }catch(e){
            console.error(e);
        }
    }

    return (
        <div className="card-layout">
            <h1>Register</h1>
            <form className="card" onSubmit={submit}>
                <input onChange={handleChange} type="text" placeholder="First Name" name="firstName" value={data.firstName}></input>
                <input onChange={handleChange} type="text" placeholder="Last Name" name="lastName" value={data.lastName}></input>
                <input onChange={handleChange} type="email" placeholder="Email" name="email" value={data.email}></input>
                <input onChange={handleChange} type="password" placeholder="Password" name="password" value={data.password}></input>
                <input onChange={handleChange} type="password" placeholder="Confirm Password" name="confPassword" value={data.confPassword}></input>
                <Link to="/login">Already have an account? Login here</Link>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;