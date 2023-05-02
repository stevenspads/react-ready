import { useState, useEffect } from 'react';

type Props = {
  postId: number;
};

// 🔴 Bad: effect used to reset state when prop changes

/*
const BlogPost = ({ postId }: Props) => {
  const [comment, setComment] = useState('');

  useEffect(() => {
    setComment('');
  }, [postId]);

  return (
    <>
      <p>Post ID: {postId}</p>
      <p>
        Comment:{' '}
        <input type="text" name="comment" value={comment} onChange={(event) => setComment(event.target.value)} />
      </p>
    </>
  );
};
*/

// To run the 🔴 Bad scenario:
// - uncomment the BlogPost component above
// - comment out the BlogPost and Post components below

// ✅ Good: state automatically reset on key change from BlogPost

const Post = ({ postId }: Props) => {
  const [comment, setComment] = useState('');

  return (
    <>
      <p>Post ID: {postId}</p>
      <p>
        Comment:{' '}
        <input type="text" name="comment" value={comment} onChange={(event) => setComment(event.target.value)} />
      </p>
    </>
  );
};

const BlogPost = ({ postId }: Props) => {
  return <Post postId={postId} key={postId} />;
};

const BlogPostApp = () => {
  const [id, setId] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setId((id) => id + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return <BlogPost postId={id} />;
};

const UseEffectResetState = () => {
  return (
    <div className="Example">
      <h4>Using useEffect() to reset state when a prop changes</h4>
      <BlogPostApp />
    </div>
  );
};

export { UseEffectResetState };
