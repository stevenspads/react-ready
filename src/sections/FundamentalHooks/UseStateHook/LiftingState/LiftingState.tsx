import { ChangeEvent, useState } from 'react';

// 🔴 Bad: movie state is inaccessible outside of FavoriteMovie

/*
type NameProps = {
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Name = ({ name, onChange }: NameProps) => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={onChange} />
    </div>
  );
};

const FavoriteMovie = () => {
  const [movie, setMovie] = useState<string>('');

  return (
    <div>
      <label htmlFor="movie">Favorite Movie</label>
      <input
        id="movie"
        value={movie}
        onChange={event => setMovie(event.target.value)}
      />
    </div>
  );
};

type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return <p>Hello, {name}.</p>
};

const App = () => {
  const [name, setName] = useState<string>('');

  return (
    <form>
      <Name name={name} onChange={event => setName(event.target.value)} />
      <FavoriteMovie />
      <Greeting name={name} />
    </form>
  );
};
*/

// ✅ Good: movie state lifted to App component

type NameProps = {
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Name = ({ name, onChange }: NameProps) => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={onChange} />
    </div>
  );
};

type FavoriteMovieProps = {
  movie: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FavoriteMovie = ({ movie, onChange }: FavoriteMovieProps) => {
  return (
    <div>
      <label htmlFor="movie">Favorite Movie</label>
      <input id="movie" value={movie} onChange={onChange} />
    </div>
  );
};

type GreetingProps = {
  name: string;
  movie: string;
};

const Greeting = ({ name, movie }: GreetingProps) => {
  return (
    <p>
      Hello, {name}. Your favorite movie is {movie}.
    </p>
  );
};

const App = () => {
  const [name, setName] = useState<string>('');
  const [movie, setMovie] = useState<string>('');

  return (
    <form>
      <Name name={name} onChange={(event) => setName(event.target.value)} />
      <FavoriteMovie movie={movie} onChange={(event) => setMovie(event.target.value)} />
      <Greeting name={name} movie={movie} />
    </form>
  );
};

const LiftingState = () => {
  return (
    <div className="Example">
      <h4>Lifting State</h4>
      <App />
    </div>
  );
};

export { LiftingState };
