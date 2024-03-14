import React from 'react';
import HelloWorld from './HelloWorld';
import Button from './Button';
import Container from './Container';
import Navigation from './Navigation';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Navigation />
      <Container>
        <HelloWorld />
        <Button text="Click Me" onClick={handleClick} />
      </Container>
    </div>
  );
}

export default App;