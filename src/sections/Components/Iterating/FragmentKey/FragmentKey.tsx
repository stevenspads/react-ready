import { Fragment } from 'react';

type Term = {
  id: number;
  name: string;
  description: string;
};

type Props = {
  terms: Array<Term>;
};

const Glossary = ({ terms }: Props) => {
  return (
    <dl>
      {terms.map((term) => (
        <Fragment key={term.id}>
          <dt>{term.name}</dt>
          <dd>{term.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
};

const FragmentKey = () => {
  return (
    <div className="Example">
      <h4>Key on a React fragment</h4>
      <Glossary
        terms={[
          { id: 1, name: 'React', description: 'A JavaScript library' },
          { id: 2, name: 'Vite', description: 'Frontend tooling' },
          { id: 3, name: 'JavaScript', description: 'A scripting language' },
        ]}
      />
    </div>
  );
};

export { FragmentKey };
