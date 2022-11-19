import cx from 'classnames';
import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(100);
  const [liked, setLiked] = useState(false);

  function handleLikeButtonClick() {
    setLikes((likes) => (liked ? likes - 1 : likes + 1));
    setLiked((liked) => !liked);
  }

  return (
    <>
      <div>
        <h2>Like Button</h2>
        
        <button 
          className={cx({ 'like-button': true, liked })} 
          onClick={handleLikeButtonClick}
        >
          Like | <span className="likes-counter">{likes}</span>
        </button>
      </div>

      <style>{`
        .like-button {
          font-size: 1rem;
          padding: 5px 10px;
          color:  #585858;
        }

        .liked {
          font-weight: bold;
          color: #1565c0;
        }
      `}</style>
    </>
  );
}