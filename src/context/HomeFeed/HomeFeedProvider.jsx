import { useState } from "react";
import PropTypes from "prop-types";
import { HomeFeedContext } from "./HomeFeedContext";

export const HomeFeedProvider = ({ children }) => {
  const [openCreatePost, setOpenCreatePost] = useState(false);
  
  return (
    <HomeFeedContext.Provider
      value={{ openCreatePost, setOpenCreatePost }}
    >
      {children}
    </HomeFeedContext.Provider>
  );
};

HomeFeedProvider.propTypes = {
  children: PropTypes.any,
};
