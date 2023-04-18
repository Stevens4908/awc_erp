import React from "react";
import Sidebar from "../components/Sidebar";
import '../css/dashboard_styles.css'
import Header from "../components/Header";
import Area from "../components/Area";
import 'bootstrap/dist/css/bootstrap.min.css';

import Uno from "./Uno";
import Dos from './Dos';
import { Col, Row, Container } from "react-bootstrap";



function Dashboard () {

 

  return (  

<React.Fragment>

     <Header/>
      

    <Container fluid>

      <Row>

        <Col sm={2} className=""><Sidebar/></Col>

        <Col sm={10} className=""><Area/></Col>

      </Row>

    </Container>
    
      


</React.Fragment>



  );
}

export default Dashboard;



 