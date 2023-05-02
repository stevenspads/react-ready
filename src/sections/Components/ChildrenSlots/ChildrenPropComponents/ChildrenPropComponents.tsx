import { ReactNode } from 'react';

type Props = {
  title: string;
  children?: ReactNode;
};

const Sidebar = ({ title, children }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

const SidebarMenu = () => {
  return (
    <ul>
      <li>Item 1</li>
    </ul>
  );
};

const App = () => {
  return (
    <>
      <Sidebar title="Sidebar">
        <SidebarMenu />
        <div>
          <h3>A widget</h3>
          <p>This is a widget.</p>
        </div>
        <p>Thanks for using the sidebar.</p>
      </Sidebar>
    </>
  );
};

const ChildrenPropComponents = () => {
  return (
    <div className="Example">
      <h4>The children prop receiving components</h4>
      <App />
    </div>
  );
};

export { ChildrenPropComponents };
