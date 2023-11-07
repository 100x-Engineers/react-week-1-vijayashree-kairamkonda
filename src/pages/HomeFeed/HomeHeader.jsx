import avatarIcon from "../../assets/avatar.png";
import LogoIcon from "../../assets/100x.svg";
import { Avatar } from "../../components/shared/Avatar";

export const HomeHeader = () => {
  return (
    <div>
      <header className="flex justify-around py-6 border-b-2 border-neutral-700 items-center w-full h-10 px-2">
        <span>
          <Avatar url={avatarIcon} />
        </span>
        <span>
          <img src={LogoIcon} />
        </span>
      </header>
    </div>
  );
};

