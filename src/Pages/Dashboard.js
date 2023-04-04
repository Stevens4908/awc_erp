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

           <Header style={{zIndex:"5"}} />
           <section >
              <div className="col-2 bg-white " style={{height:"90vh" , overflow:"auto" , boxShadow:"3px 0 3px -2px rgba(0, 0, 0, 0.3)" , zIndex:"0"}}>
                <Sidebar/>
              </div>
           </section>

                
              
               
          </React.Fragment>
          
        );
    }
}



 export default Dashboard ;
 