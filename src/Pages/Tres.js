import React, { useState } from 'react';
import Text from '../Pages/Uno';
import Button from '../Pages/Dos';

function ColorChanger() {
  const [color, setColor] = useState('black');

  function handleButtonClick() {
    setColor('red');
  }

  return (
    <div>
      <Text color={color} >
        Hola, este es un texto de ejemplo.
      </Text>
      <Button onClick={handleButtonClick}>
        Cambiar color a rojo
      </Button>
    </div>
  );
}

export default ColorChanger;

{/*
function ColorChanger() {
    const [color, setColor] = useState('black');
  
    function handleButtonClick() {
      setColor(prevColor => prevColor === 'black' ? 'red' : 'black');
    }
  
    return (
      <div >
        <Text color={color}>
          Hola, este es un texto de ejemplo.
        </Text>
        <Button onClick={handleButtonClick}>
          Cambiar color
        </Button>
      </div>
    );
  }
  
  export default ColorChanger;
*/}