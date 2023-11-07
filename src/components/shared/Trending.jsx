import optionsIcon from "../../assets/options.svg";
import PropTypes from "prop-types";

const Trending = ({ topicName, noOfPosts }) => {
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="text-3xl font-bold ">What&apos;s happening</div>
      <div className="my-4 flex flex-col space-y-2">
        <div className="flex w-full justify-between items-center">
          <div className="text-neutral-500">Trending</div>
          <div>
            <img src={optionsIcon} />
          </div>
        </div>
        <div>{topicName}</div>
        <div className="text-neutral-500">{noOfPosts} posts</div>
      </div>
      <div className="text-twitter-default">Show more</div>
    </div>
  );
};

Trending.propTypes = {
  topicName: PropTypes.string,
  noOfPosts: PropTypes.number,
};

export default Trending;
