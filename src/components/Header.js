import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/header.css'
import logo from '../images/Logo - Vertical Blanco.png'

function Header () {
    return ( 

        <React.Fragment>

            <div className="container-fluid contenedor2 bg-primary bg-gradient">
                

                    <div className="col-2  px-0  overflow-hidden ">
                        <div className="row justify-content-center">
                            <div className="col-6 mt-3 text-center">
                                <img src={logo} className=" logo_header " ></img>
                            </div>
                        </div>
                        
                    </div>
                

               
            </div>

        </React.Fragment>


     );
}

export default Header;