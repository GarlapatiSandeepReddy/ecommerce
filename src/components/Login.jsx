import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import url from "../constants";
import axios from "axios";

function Login(){
    const navigate = useNavigate();

    const [data, setData] = useState({
        email : "",
        password : ""
    })

    const [loginResponse, setLoginResponse] = useState(null);

    const [message, setMessage] = useState("");
    function onLoginFailure(status){
        if(status === 1){
            setMessage("Incorrect Password");
        }else if(status === 2){
            setMessage("User doesn't Exist");
        }else{
            setMessage("Login failed. Try again after some time.")
        }
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setData((prevData) =>{
            return{
                ...prevData,
                [name]:value
            };
        });
    }

    async function handleLoginResponse(value){
        setLoginResponse(value);
    }

    async function submit(event){
        try{
            event.preventDefault();
            console.log(data);
            const result = await axios.post(url + "login", data, {
                headers : {
                    "Content-Type" : 'application/json',
                },
            });
            await handleLoginResponse(result.data);
            const response = result.data;
            const status = response.status;
            if(status === 0){
                setIsLoggedIn(true);
                localStorage.setItem('token', response.jwtToken);
                navigate('/home', {state: {userData : response}, replace: true});
            }else{
                onLoginFailure(loginResponse.status)
            }
        }catch(e){
            console.error(e);
        }
    }

    return (
        <div className="card-layout">
            <h1>Login</h1>
            <form className="card" onSubmit={submit}>
                <input onChange={handleChange} type="email" placeholder="Email" name="email" value={data.email}></input>
                <input onChange={handleChange} type="password" placeholder="Password" name="password" value={data.password}></input>
                <Link to="/register">Create an account?</Link>
                <button type="submit">Login</button>
                <p className="errorMessage">{message}</p>
            </form>
        </div>
    );
}

export default Login;