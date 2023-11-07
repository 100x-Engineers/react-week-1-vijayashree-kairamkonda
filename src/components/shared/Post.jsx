import { Avatar } from "./Avatar";
import commentIcon from "../../assets/comment.svg";
import reTweetIcon from "../../assets/retweet.svg";
import heartIcon from "../../assets/heart.svg";
import reachIcon from "../../assets/reach.svg";
import shareIcon from "../../assets/share.svg";
import PropTypes from "prop-types";

export const Post = ({ meta = {}, post = {} }) => {
  return (
    <section className="text-neutral-50 flex flex-col gap-4 w-full border-b-2 border-neutral-700 py-4 px-3">
      <Avatar
        url={post?.postedBy?.userImage}
        userName={post?.postedBy?.userFullName}
        userHandle={post?.postedBy?.userName}
      />
      <div className=" flex flex-col space-y-6 pl-10">
        <div>{post?.text}</div>
        <div className="flex space-x-6 items-center ">
          <div className="flex gap-1 items-center">
            <img src={commentIcon} alt="comment" />
            <span>{meta?.comments}</span>
          </div>
          <div className="flex gap-1 items-center px-2">
            <img src={reTweetIcon} alt="retweet" />
            <span>{meta?.reposts}</span>
          </div>
          <div className="flex gap-1 items-center px-2">
            <img src={heartIcon} alt="heart" />
            <span>{meta?.likes}</span>
          </div>
          <div className="flex gap-1 items-center px-2">
            <img src={reachIcon} alt="reach" />
            <span>{meta?.views}</span>
          </div>
          <div className="flex gap-1 items-center px-2">
            <img src={shareIcon} alt="share" />
          </div>
        </div>
      </div>
    </section>
  );
};

Post.propTypes = {
  meta: PropTypes.objectOf({
    comments: PropTypes.number,
    reposts: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
  post: PropTypes.objectOf({
    id: PropTypes.number,
    text: PropTypes.string,
    postedAt: PropTypes.string,
    postedBy: PropTypes.objectOf({
      userid: PropTypes.number,
      userName: PropTypes.string,
      userFullName: PropTypes.string,
      userImage: PropTypes.any,
    }),
  }),
};
