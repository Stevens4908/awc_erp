
/*1
import React, {useState}  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar_styles.css'



function Sidebar () {

   /* const [sidebarOpen, setSidebarOpen] = useState(false); */

 /*2  const [expandedItems, setExpandedItems] = useState([]);

   const handleItemClick = (index) => {
     if (expandedItems.includes(index)) {
       // Si el item ya está expandido, lo eliminamos del array de items expandidos
       setExpandedItems(expandedItems.filter((item) => item !== index));
     } else {
       // Si el item no está expandido, lo agregamos al array de items expandidos
       setExpandedItems([...expandedItems, index]);
     }
   };

    const menuItems = [
      {
        name: "Item 1 >",
        children: ["Subitem 1.1", "Subitem 1.2"]
      },
      {
        name: "Item 2 >",
        children: ["Subitem 2.1", "Subitem 2.2"]
      },
      {
        name: "Item 3 >",
        children: ["Subitem 3.1", "Subitem 3.2"]
      },
      {
        name: "Item 4 >",
        children: ["Subitem 4.1", "Subitem 4.2"]
      },
      {
        name: "Item 5 >",
        children: ["Subitem 4.1", "Subitem 4.2"]
      },
      {
        name: "Item 6 >",
        children: ["Subitem 4.1", "Subitem 4.2"]
      }

    ];

    return ( 

        <React.Fragment>


    
      
        <div className="row  bg-white ms-3">
        
     
     
        <ul >
          {menuItems.map((item, index) => (
            <li className="cursor1" key={index}>
              <span onClick={() => handleItemClick(index)}>{item.name}</span>
              {expandedItems.includes(index) && (
              <ul>
                {item.children.map((child, childIndex) => (
                  <li key={childIndex}>{child}</li>
                ))}
              </ul>
              )}
            </li>
          ))}
        </ul>
      
    
   

        </div>
  
   {/*
     open={sidebarOpen}
      onSetOpen={setSidebarOpen}
    
      <button onClick={() => setSidebarOpen(true)}>Open sidebar</button>
                */  /*3



        </React.Fragment>

     );
}

export default Sidebar;

*/

import React, {useState}  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar_styles.css'
import Accordion from 'react-bootstrap/Accordion';


import { Container, Row, Col, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';




function Sidebar () {

  const [isVisible, setIsVisible] = useState("ham");


  return (  


    <React.Fragment>
      
<Container fluid style={{  maxWidth:"15vw" , minHeight:"100vh" , justifyContent: 'flex-start', position: 'absolute', left: 0}}   className={` bg-white  ${isVisible}`}   >

    <Nav defaultActiveKey="/home" className="flex-column bg-white " >
      <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem 1
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem 2 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Accordion Item #3</Accordion.Header>
              <Accordion.Body>
                Lorem 3
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Accordion Item #4</Accordion.Header>
              <Accordion.Body>
                Lorem 4 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Accordion Item #5</Accordion.Header>
              <Accordion.Body>
                Lorem 5
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Accordion Item #6</Accordion.Header>
              <Accordion.Body>
                Lorem 6 
              </Accordion.Body>
            </Accordion.Item>
      </Accordion>
    </Nav>

</Container>
    



    

</React.Fragment>


  );
}

export default Sidebar;

