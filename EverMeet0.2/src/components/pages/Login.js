import React, { useState, useEffect } from 'react';
import '../login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Footer from "../Footer";

function Login() {
    console.log(process.env.REACT_APP_BASE_URL);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`,{
            email : email,
            pass : pass
        }).then((response) => {
            console.log(response);
            if(response.data.firstName){
                localStorage.setItem('user',response.data);
                navigate('/home');
                }else{
                 alert("Please enter correct details");
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/home');
      }
    })
    
    return (
        <>
            <Navbar></Navbar>
            <div className="container fbox">
                <div className="row lrow">
                    <h3 className='lhead'>Signin</h3>
                    <div className="col-xl-12">
                        <form onSubmit={handleSubmit}>
                            <input type="email" className="form-control" placeholder="Email" aria-label="First name" required name='email' onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                            <br />
                            <input type="password" className="form-control" placeholder="Password" aria-label="First name" required name='pass' onChange={(e) => {
                                setPass(e.target.value);
                            }} />
                            <br />
                            <button type='submit' className='btn btn-dark '>Signin</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Login;
