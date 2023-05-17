import { ReactNode, useState } from 'react';

type User = {
  name: string;
};

const App = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ backgroundColor: 'lightgray' }}>
        <Header />
      </div>
      <div style={{ flex: 1 }}>
        {currentUser ? (
          <Dashboard>
            <DashboardNavigation />
            <DashboardContent>
              <WelcomeMessage user={currentUser} />
            </DashboardContent>
          </Dashboard>
        ) : (
          <Login onLogin={() => setCurrentUser({ name: 'John' })} />
        )}
      </div>
      <div style={{ backgroundColor: 'lightgray' }}>
        <Footer />
      </div>
    </div>
  );
};

const PropDrillingCompositionFix = () => {
  return (
    <div className="Example">
      <h3>Prop Drilling Fixed With Composition</h3>
      <App />
    </div>
  );
};

export { PropDrillingCompositionFix };

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

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      {children}
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

const DashboardContent = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h3>Dashboard Content</h3>
      {children}
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