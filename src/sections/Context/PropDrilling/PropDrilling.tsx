import { useState } from 'react';

type User = {
  name: string;
};

const App = () => {
  // global state that is usually put into context
  const [currentUser, setCurrentUser] = useState<User>();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ backgroundColor: 'lightgray' }}>
        <Header />
      </div>
      <div style={{ flex: 1 }}>
        {currentUser ? <Dashboard user={currentUser} /> : <Login onLogin={() => setCurrentUser({ name: 'John' })} />}
      </div>
      <div style={{ backgroundColor: 'lightgray' }}>
        <Footer />
      </div>
    </div>
  );
};

const PropDrilling = () => {
  return (
    <div className="Example">
      <h3>Prop Drilling</h3>
      <App />
    </div>
  );
};

export { PropDrilling };

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};

const Login = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <div>
      <h2>Login</h2>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

const Dashboard = ({ user }: { user: User }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <DashboardNavigation />
      <DashboardContent user={user} />
    </div>
  );
};

const DashboardNavigation = () => {
  return (
    <div>
      <h3>Dashboard Navigation</h3>
    </div>
  );
};

const DashboardContent = ({ user }: { user: User }) => {
  return (
    <div>
      <h3>Dashboard Content</h3>
      <WelcomeMessage user={user} />
    </div>
  );
};

const WelcomeMessage = ({ user }: { user: User }) => {
  return (
    <div>
      <p>Welcome, {user.name}.</p>
    </div>
  );
};