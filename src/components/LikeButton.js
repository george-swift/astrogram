import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const toggleLikes = () => setLiked((liked) => !liked);

  return (
    <>
      {liked ? (
        <FaHeart className="card__icon--liked" onClick={toggleLikes} />
      ) : (
        <FaRegHeart className="card__icon" onClick={toggleLikes} />
      )}
    </>
  );
};

export default LikeButton;
