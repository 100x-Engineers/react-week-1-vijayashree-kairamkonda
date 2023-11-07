import plusIcon from "../../assets/plus.svg";
import { useContext } from "react";
import { HomeFeedContext } from "../../context/homeFeed/HomeFeedContext";

export const FloatingBubble = () => {
  const { setOpenCreatePost } = useContext(HomeFeedContext);
  return (
    <div>
      <span className="flex justify-end fixed bottom-16 right-0 mx-3">
        <img
          src={plusIcon}
          className="bg-twitter-default rounded-full p-4"
          onClick={() => setOpenCreatePost(true)}
        />
      </span>
    </div>
  );
};
