import { MouseEvent } from 'react';

const Button = () => {
  const handleClickEvent = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(`Event type: ${event.type}`);
  };

  return <button onClick={handleClickEvent}>Submit</button>;
};

const EventHandlerOutsideJSX = () => {
  return (
    <div className="Example">
      <h4>Event handler outside JSX</h4>
      <Button />
    </div>
  );
};

export { EventHandlerOutsideJSX };
