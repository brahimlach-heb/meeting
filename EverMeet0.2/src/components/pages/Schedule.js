import React from "react";
import '../../App.css'
import Sidebar from "../Sidebar";
import Host from "../Host"
import Footer from "../Footer";

function Schedule(){
    return(
    <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Host />
      </div>
      <Footer />
    </>
    );
}

export default Schedule;