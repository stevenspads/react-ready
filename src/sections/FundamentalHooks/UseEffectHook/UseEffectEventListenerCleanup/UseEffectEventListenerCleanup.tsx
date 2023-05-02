import { useEffect } from 'react';

const ListenerLogger = () => {
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      console.log(`Key up: ${e.key}`);
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return <p>Logging keyup events to the console</p>;
};

const UseEffectEventListenerCleanup = () => {
  return (
    <div className="Example">
      <h4>useEffect event listener cleanup</h4>
      <ListenerLogger />
    </div>
  );
};
export { UseEffectEventListenerCleanup };
