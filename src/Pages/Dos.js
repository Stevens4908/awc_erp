import React from 'react';

function Button(props) {

  
  function handleClick() {
    props.onClick();
  }

  return (

    <div className='bg-success'> 
      <button onClick={handleClick} className=' mt-5'>
          {props.children}
      </button>
    </div>
   
  );
}

export default Button;
