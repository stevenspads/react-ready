import { useEffect } from 'react';

type Props = {
  name: string;
};

// 🔴 Bad: Avoid side-effects in the component body

/*
const User = ({ name }: Props) => {
  document.title = name; 

  return <h1>{name}</h1>;   
};
*/

// ✅ Good: side-effect handled by useEffect

const User = ({ name }: Props) => {
  useEffect(() => {
    document.title = name;
  }, [name]);

  return <p>Name: {name}</p>;
};

const UseEffectDocumentTitle = () => {
  return (
    <div className="Example">
      <h4>Set the document title</h4>
      <User name="John Smith" />
    </div>
  );
};

export { UseEffectDocumentTitle };
