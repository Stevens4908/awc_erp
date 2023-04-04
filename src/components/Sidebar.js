import React, {useState}  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar_styles.css'



function Sidebar () {

   /* const [sidebarOpen, setSidebarOpen] = useState(false); */

   const [expandedItems, setExpandedItems] = useState([]);

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
            <li key={index}>
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
                */}



        </React.Fragment>

     );
}

export default Sidebar;

