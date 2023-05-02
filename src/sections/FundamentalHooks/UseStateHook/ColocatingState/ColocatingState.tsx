import { ChangeEvent, useState } from 'react';

// 🔴 Bad: `name` state is not closest to where it's used

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

type FavoriteMovieProps = {
  movie: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FavoriteMovie = ({ movie, onChange }: FavoriteMovieProps) => {
  return (
    <div>
      <label htmlFor="movie">Favorite Movie</label>
      <input
        id="movie"
        value={movie}
        onChange={onChange}
      />
    </div>
  );
};

type GreetingProps = {
  movie: string;
};

const Greeting = ({ movie }: GreetingProps) => {
  return <p>Your favorite movie is {movie}.</p>
};

const App = () => {
  const [name, setName] = useState<string>('');
  const [movie, setMovie] = useState<string>('');

  return (
    <form>
      <Name name={name} onChange={event => setName(event.target.value)} />
      <FavoriteMovie movie={movie} onChange={event => setMovie(event.target.value)} />
      <Greeting movie={movie} />
    </form>
  );
};
*/

// ✅ Good: `name` state is moved closest to where it's used

const Name = () => {
  const [name, setName] = useState<string>('');

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={(event) => setName(event.target.value)} />
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
  movie: string;
};

const Greeting = ({ movie }: GreetingProps) => {
  return <p>Your favorite movie is {movie}.</p>;
};

const App = () => {
  const [movie, setMovie] = useState<string>('');

  return (
    <form>
      <Name />
      <FavoriteMovie movie={movie} onChange={(event) => setMovie(event.target.value)} />
      <Greeting movie={movie} />
    </form>
  );
};

const ColocatingState = () => {
  return (
    <div className="Example">
      <h4>Colocating state</h4>
      <App />
    </div>
  );
};

export { ColocatingState };
