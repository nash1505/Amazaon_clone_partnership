import React from 'react';
import fire from '../fire'
import '../Loginpage.css'
import {useState,useEffect} from 'react'
const Login = () => {
const [user,setUser] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [emailError,setEmailError] = useState('');
const [password,setPasswordError] = useState('');
const [hasAccount,setHasAccount] = useState(false);


const handleLogin = () => 
{
    fire
    

}

    return (
        <div class="ui fluid container">
            <div class="Login-box">
                <h1>Sign-In</h1>
                <form>
                    <label>Email or mobile phone number</label>
                    <p><input type="text">
                    </input></p>
                    <label>Password</label>
                    <p><input type="password">
                    </input></p>
                    <div class="Button-container">
                    <button>Sign In</button>
                    </div>
                </form>
               
            </div>
        </div>
    )
}
export default Login