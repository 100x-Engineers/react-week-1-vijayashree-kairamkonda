import linkIcon from "../../assets/link.svg";
import calenderIcon from "../../assets/calendar.svg";
import { Avatar } from "../shared/Avatar";
import { Button } from "../shared/Button";
import PropTypes from "prop-types";

export const ProfileHeader = ({ user }) => {
  return (
    <div>
      <header className="relative">
        <img src={user?.userBackground} className="w-full" />
        <Avatar url={user?.userImage} profile={"profile"} />
      </header>
      <div>
        <div className="flex justify-end m-2">
          <Button variant="secondary" size="md" width="sm">
            Edit profile
          </Button>
        </div>
      </div>

      <section className="px-3">
        <div className="flex flex-col justify-start">
          <h3 className="font-bold text-xl leading-normal">
            {user?.userFullName}
          </h3>
          <h5>{user?.username}</h5>
          <p className="py-4">{user?.bio}</p>
        </div>
        <div className="flex space-x-6 flex-wrap">
          <span className="flex space-x-2 flex-wrap">
            <img src={linkIcon} />
            <a href="*" className="text-twitter-default">
              {user?.bioLink}
            </a>
          </span>
          <span className="flex space-x-2 flex-wrap">
            <img src={calenderIcon} />
            <span>Joined&nbsp;{user?.joinedAt}</span>
          </span>
        </div>
        <div className="flex space-x-3 my-4">
          <span className="flex space-x-1">
            <span>{user?.following}</span>
            <span className="text-neutral-500"> Following</span>
          </span>
          <span className="flex space-x-1">
            <span>{user?.followers}</span>
            <span className="text-neutral-500">Followers</span>
          </span>
        </div>
      </section>
    </div>
  );
};

ProfileHeader.propTypes = {
  user: PropTypes.objectOf({
    id: PropTypes.number,
    username: PropTypes.string,
    userFullName: PropTypes.string,
    bio: PropTypes.string,
    userImage: PropTypes.url,
    userBackground: PropTypes.url,
    following: PropTypes.number,
    followers: PropTypes.number,
    bioLink: PropTypes.url,
    joinedAt: PropTypes.string,
  }),
};

