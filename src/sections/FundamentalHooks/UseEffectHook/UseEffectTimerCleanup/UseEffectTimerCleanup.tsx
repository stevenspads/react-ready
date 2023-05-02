import { useState, useEffect } from 'react';

type Props = {
  message: string;
};

// 🔴 Bad: TimerLogger without a useEffect cleanup function

/*
const TimerLogger = ({ message }: Props) => {
  useEffect(() => {
    setInterval(() => {
      console.log(message);
    }, 2000);
  }, [message]);

  return <p>Logging "{message}" to the console</p>;
}
*/

// ✅ Good: TimerLogger with a useEffect cleanup function

const TimerLogger = ({ message }: Props) => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [message]);

  return <p>Logging {message} to the console</p>;
};

const Message = () => {
  const [message, setMessage] = useState('Hello World');

  return (
    <div>
      <p>Type a message</p>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <TimerLogger message={message} />
    </div>
  );
};

const UseEffectTimerCleanup = () => {
  return (
    <div className="Example">
      <h4>Timer cleanup</h4>
      <Message />
    </div>
  );
};

export { UseEffectTimerCleanup };
