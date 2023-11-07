import { useContext } from "react";
import crossIcon from "../../assets/cross.svg";
import { CreateAccountContext } from "../../context/createAccount/CreateAccountContext";

export const CreateAccountHeader = () => {
  const { steps, setSteps, setPages } = useContext(CreateAccountContext);

  const handleNavigateSteps = () => {
    steps === "4"
      ? setSteps("3")
      : steps === "3"
      ? setSteps("2")
      : steps === "2"
      ? setSteps("1")
      : setPages("");
  };
  return (
    <div className="flex space-x-6">
      <img src={crossIcon} className="w-6 h-6" onClick={handleNavigateSteps} />
      <span className="font-bold">
        {steps === "2"
          ? "Step 2 of 4"
          : steps === "3"
          ? "Step 3 of 4"
          : steps === "4"
          ? "Step 4 of 4"
          : "Step 1 of 4"}
      </span>
    </div>
  );
};
