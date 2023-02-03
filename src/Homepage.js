import { ReactComponent as Hand } from "./hand.svg";
import { useState } from "react";

const Homepage = () => {
  let [likes, setLikes] = useState(0);

  const handleCLick = () => {
    setLikes(likes++);
  };
  return (
    <div className="homepage">
      <div className="likes">
        <p>"The more I learn about people, the more I like my dog"</p>
        <p className="author">-Mark Twain</p>
        <h3>{likes} Likes</h3>
        <button onClick={handleCLick} className="like-btn">
          <Hand /> <span>Like</span>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
