import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Sidebar = ({ children }: Props) => {
  return <div>{children}</div>;
};

const ChildrenPropText = () => {
  return (
    <div className="Example">
      <h4>The children prop receiving text</h4>
      <Sidebar>Hello World</Sidebar>
    </div>
  );
};

export { ChildrenPropText };
