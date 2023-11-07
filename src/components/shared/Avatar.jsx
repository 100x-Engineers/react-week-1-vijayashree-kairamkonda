import PropTypes from "prop-types";

export const Avatar = ({
  url = "",
  userName = "",
  userHandle = "",
  profile = "",
}) => {
  const profileStyles = {
    profile:
      "absolute w-15 box-content rounded-full border-4 border-neutral-1000 -bottom-10 left-4",
  };
  return (
    <div className="flex space-x-2">
      <img src={url} className={profileStyles[profile]} />
      <div className="flex space-x-2 w-full items-center">
        <span className="font-semibold">{userName}</span>
        <span className="text-neutral-500">{userHandle}</span>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  url: PropTypes.any,
  userName: PropTypes.string,
  userHandle: PropTypes.string,
  profile: PropTypes.string,
};
