import { useState, useTransition, memo, ReactNode } from 'react';

const TabButton = ({
  children,
  isActive,
  onClick,
}: {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  if (isActive) {
    return <b>{children}</b>;
  }

  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

const Blog = memo(function BlogTab() {
  const items = [];

  for (let i = 0; i < 500; i++) {
    items.push(<Post key={i} index={i} />);
  }

  return <ul>{items}</ul>;
});

const Post = ({ index }: { index: number }) => {
  const startTime = performance.now();

  while (performance.now() - startTime < 1) {
    // Add a 1ms delay to simulate slow code
  }

  return <li>Post {index + 1}</li>;
};

const TabContainer = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('home');

  const selectTab = (nextTab: string) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <>
      <TabButton isActive={tab === 'home'} onClick={() => selectTab('home')}>
        Home
      </TabButton>
      <TabButton isActive={tab === 'blog'} onClick={() => selectTab('blog')}>
        Blog
      </TabButton>
      <TabButton isActive={tab === 'contact'} onClick={() => selectTab('contact')}>
        Contact
      </TabButton>
      <hr />
      {isPending && <p>Loading...</p>}
      {!isPending && (
        <>
          {tab === 'home' && <h1>Home</h1>}
          {tab === 'blog' && <Blog />}
          {tab === 'contact' && <h1>Contact</h1>}
        </>
      )}
    </>
  );
};

const UseTransitionTabs = () => {
  return (
    <div className="Example">
      <h4>The useTransition() hook for tabs</h4>
      <TabContainer />
    </div>
  );
};

export { UseTransitionTabs };
