import React, { useState } from 'react';

const BasicReact = (props) => {
  return (
    <div>
      <p>received from parent {props.message}</p>
    </div>
  );
};

// parent component
const ParentComponent1 = () => {
  const [message, setMessage] = useState('hello from parent');

  const changeMessage = () => {
    setMessage('new message from parent');
  };

  return (
    <div>
      <BasicReact message={message} />
      <button onClick={changeMessage}>change message</button>
    </div>
  );
};
const ParentComponent2 = () => {
    const [message, setMessage] = useState('hello from parent2');
  
    const changeMessage = () => {
      setMessage('new message from parent2');
    };
  
    return (
      <div>
        <BasicReact message={message} />
        <button onClick={changeMessage}>change message</button>
      </div>
    );
  };

const App =() => {
    return(
        <div>
        <h1> react app</h1>
        <ParentComponent1/>
        <ParentComponent2/>
        </div>
    )
};
export default App;