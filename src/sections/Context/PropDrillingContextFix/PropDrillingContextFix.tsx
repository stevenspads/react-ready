import { createContext, useContext, useState } from 'react';

type User = {
  name: string;
};

type UserContextType = {
  currentUser: User | null;
};

const UserContext = createContext<UserContextType>({ currentUser: null });

const App = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ currentUser }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ backgroundColor: 'lightgray' }}>
          <Header />
        </div>
        <div style={{ flex: 1 }}>
          {currentUser ? <Dashboard /> : <Login onLogin={() => setCurrentUser({ name: 'John' })} />}
        </div>
        <div style={{ backgroundColor: 'lightgray' }}>
          <Footer />
        </div>
      </div>
    </UserContext.Provider>
  );
};

const PropDrillingContextFix = () => {
  return (
    <div className="Example">
      <h3>Prop Drilling Fixed With Context</h3>
      <App />
    </div>
  );
};

export { PropDrillingContextFix };

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

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <DashboardNavigation />
      <DashboardContent />
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

const DashboardContent = () => {
  return (
    <div>
      <h3>Dashboard Content</h3>
      <WelcomeMessage />
    </div>
  );
};

const WelcomeMessage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <p>Welcome, {currentUser?.name}.</p>
    </div>
  );
};
