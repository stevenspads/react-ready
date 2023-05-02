type Props = {
  id: number;
  text: string;
  onFavorite: (id: number) => void;
};

const Tweet = ({ id, text, onFavorite }: Props) => {
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => onFavorite(id)}>Favorite</button>
    </div>
  );
};

const Tweets = () => {
  const handleOnFavorite = (id: number) => {
    alert(`Favorite event for Tweet ${id}`);
  };

  return (
    <>
      <Tweet id={1} text={'Tweet 1'} onFavorite={handleOnFavorite} />
      <Tweet id={2} text={'Tweet 2'} onFavorite={handleOnFavorite} />
    </>
  );
};

const ChildToParentCommunication = () => {
  return (
    <div className="Example">
      <h3>Child-to-parent communication</h3>
      <Tweets />
    </div>
  );
};

export { ChildToParentCommunication };
