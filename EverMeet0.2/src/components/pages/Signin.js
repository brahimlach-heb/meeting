import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../signin.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Footer from "../Footer";

function Signin() {


    const[firstName, setFisrtName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        //e.preventDefault();
        console.log(e);
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/signup`,{
            firstName : firstName,
            lastName : lastName,
            email : email,
            pass : pass
        }).then((response) => {
            console.log(response);
            
        }).catch((error) => {
            console.log(error);
        })
        navigate('/');
    }

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth){
          navigate('/');
        }
      })

    return (
        <>
            <Navbar></Navbar>
            <div className="container fbox">
                <div className="row srow">
                    <h3 className='shead'>Sign Up</h3>
                    <div class="col-xl-12">
                        <form onSubmit={handleSubmit}>
                            <input type="text" class="form-control" placeholder="First name" required name='firstName' onChange={(e)=>{
                                setFisrtName(e.target.value);
                            }}/>
                            <br />
                            <input type="text" class="form-control" placeholder="Last name" required name='lastName' onChange={(e)=>{
                                setLastName(e.target.value);
                            }}/>
                            <br />
                            <input type="email" class="form-control" placeholder="Email" required name='email' onChange={(e)=>{
                                setEmail(e.target.value);
                            }}/>
                            <br />
                            <input type="password" class="form-control" placeholder="Password" required name='pass' onChange={(e)=>{
                                setPass(e.target.value);
                            }}/>
                            <br />
                            <button type='submit' className='btn btn-dark'>SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Signin;
