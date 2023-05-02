import { MouseEvent } from 'react';

const Button = () => {
  const handleClickEvent = (event: MouseEvent<HTMLDivElement>) => {
    console.log(`Event type: ${event.type}`);
  };

  return <div onClick={handleClickEvent}>Submit</div>;
};

const EventHandlerOnClickDiv = () => {
  return (
    <div className="Example">
      <h4>onClick event handler on a div</h4>
      <Button />
    </div>
  );
};

export { EventHandlerOnClickDiv };
