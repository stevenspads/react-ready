import { CSSProperties } from 'react';

const Heading = () => {
  return (
    <div style={{ border: '1px solid #333', padding: '2rem' }}>
      <h1
        style={{
          fontSize: '2rem',
          padding: '1rem',
          backgroundColor: 'green',
          color: 'white',
        }}
      >
        Main Heading
      </h1>
      <p>Main description</p>
    </div>
  );
};

const Greeting = () => {
  const Container: CSSProperties = {
    border: '1px solid #ccc',
    padding: '2rem',
  };

  const Title: CSSProperties = {
    fontSize: '1.5rem',
    padding: '1rem',
    backgroundColor: '#ccc',
    color: '#333',
  };

  return (
    <div style={Container}>
      <h1 style={Title}>Welcome!</h1>
      <p>Welcome to the site.</p>
    </div>
  );
};

const InlineStyling = () => {
  return (
    <div className="Example">
      <h3>Inline styling</h3>
      <Heading />
      <Greeting />
    </div>
  );
};

export { InlineStyling };
