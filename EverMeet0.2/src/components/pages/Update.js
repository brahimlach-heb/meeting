import React  from "react";
import '../../App.css'
import Sidebar from "../Sidebar";
import Verify from "../../update";
import Footer from "../Footer";
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';

function Update(){
    const { uid } = useParams();
    return(
    <>
    <Navbar/>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Verify userid={uid}/>
      </div>
      <Footer />
    </>
    );
}

export default Update;