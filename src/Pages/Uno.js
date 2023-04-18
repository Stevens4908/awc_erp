import React from 'react';

function Text(props) {
  return (
    <div style={{ color: props.color }} className='bg-primary h1 p-3'>
      {props.children}
    </div>
  );
}

export default Text;