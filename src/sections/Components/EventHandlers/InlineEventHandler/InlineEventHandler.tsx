const Button = () => {
  return <button onClick={() => console.log('Clicked')}>Submit</button>;
};

const InlineEventHandler = () => {
  return (
    <div className="Example">
      <h4>Inline event handler function</h4>
      <Button />
    </div>
  );
};

export { InlineEventHandler };
