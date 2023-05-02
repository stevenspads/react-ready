import { ReactNode } from 'react';

type Props = {
  left: ReactNode;
  right: ReactNode;
};

const Panel = ({ left, right }: Props) => {
  return (
    <div>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

const Profile = () => {
  return <p>Profile</p>;
};

const ContactForm = () => {
  return <p>Contact form</p>;
};

const App = () => {
  return <Panel left={<Profile />} right={<ContactForm />} />;
};

const MultipleSlots = () => {
  return (
    <div className="Example">
      <h4>Multiple slots</h4>
      <App />
    </div>
  );
};

export { MultipleSlots };
