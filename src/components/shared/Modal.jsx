import crossIcon from "../../assets/cross.svg";
import PropTypes from "prop-types";

export const Modal = ({ children }) => {
  return (
    <div>
      <section className="bg-gray-700 flex p-2">
        <div className="h-26.6rem rounded-2xl m-2 w-30.1rem bg-black text-neutral-50">
          <div className="flex items-center py-4 px-2 gap-4">
            <img src={crossIcon} className="h-5 w-6" onClick={() => {}} />
          </div>
          {children}
        </div>
      </section>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
};
