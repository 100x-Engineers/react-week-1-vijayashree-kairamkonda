import { useState } from "react";
import { CreateAccountContext } from "./CreateAccountContext";
import PropTypes from "prop-types";
import { days31, monthOptions, years } from "../../constants/Constants";

export const CreateAccountProvider = ({ children }) => {
  const [steps, setSteps] = useState("");
  const [pages, setPages] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    birthMonth: monthOptions?.[0]?.value,
    birthDay: days31?.[0]?.value,
    birthYear: years?.[0]?.value,
    password:""
  });

  return (
    <CreateAccountContext.Provider
      value={{
        steps,
        setSteps,
        pages,
        setPages,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </CreateAccountContext.Provider>
  );
};

CreateAccountProvider.propTypes = {
  children: PropTypes.any,
};
