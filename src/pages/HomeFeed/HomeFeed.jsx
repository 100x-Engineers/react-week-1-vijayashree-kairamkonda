import { useContext } from "react";
import { FloatingBubble } from "../../components/shared/FloatingBubble";
import { Navigation } from "../../components/shared/Navigation";
import { Post } from "../../components/shared/Post";
import { Tabs } from "../../components/shared/Tabs";
import { HomeHeader } from "./HomeHeader";
import { HomeFeedContext } from "../../context/homeFeed/HomeFeedContext";
import { CreatePost } from "../../components/shared/CreatePost";
import { posts } from "../../constants/Constants";

export const HomeFeed = () => {
  const { openCreatePost } = useContext(HomeFeedContext);

  return (
    <>
      {openCreatePost ? (
        <CreatePost />
      ) : (
        <>
          <HomeHeader />
          <Tabs />
          <div className="overflow-auto pb-20">
            {posts.map((item, index) => (
              <div key={index}>
                <Post post={item?.post} meta={item?.meta} />
              </div>
            ))}
          </div>
          <FloatingBubble />
          <Navigation />
        </>
      )}
    </>
  );
};
