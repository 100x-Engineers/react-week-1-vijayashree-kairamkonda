import arrowLeft from "../../assets/arrowleft.svg";
import PropTypes from "prop-types";

export const PageHeader = ({ children }) => {
  return (
    <div className="flex space-x-4 p-2">
      <div>
        <img src={arrowLeft} />
      </div>
      <div>{children}</div>
    </div>
  );
};

PageHeader.propTypes = {
  children: PropTypes.any,
};
