import React from "react";
import Sidebar from "../components/Sidebar";
import '../css/dashboard_styles.css'
import Header from "../components/Header";
import Area from "../components/Area";
import 'bootstrap/dist/css/bootstrap.min.css';




class Dashboard extends React.Component {
    state = {  } 
    render() { 
        return (

          <React.Fragment>

           <Header />



  <Sidebar/>


             

                
              
               
          </React.Fragment>
          
        );
    }
}



 export default Dashboard ;
 