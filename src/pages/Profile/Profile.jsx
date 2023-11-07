import { useContext } from "react";
import { ProfileHeader } from "../../components/Profile/ProfileHeader";
import { CreatePost } from "../../components/shared/CreatePost";
import { FloatingBubble } from "../../components/shared/FloatingBubble";
import { Navigation } from "../../components/shared/Navigation";
import { Post } from "../../components/shared/Post";
import { HomeFeedContext } from "../../context/homeFeed/HomeFeedContext";
import { posts } from "../../constants/Constants";

export const Profile = () => {
  const { openCreatePost } = useContext(HomeFeedContext);
  return (
    <div>
      {openCreatePost ? (
        <CreatePost />
      ) : (
        <>
          <ProfileHeader />
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
    </div>
  );
};
