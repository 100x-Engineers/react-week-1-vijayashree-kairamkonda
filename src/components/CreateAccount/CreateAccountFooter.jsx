import { useContext } from "react";
import { Button } from "../shared/Button";
import { CreateAccountContext } from "../../context/createAccount/CreateAccountContext";
import { HOME } from "../../constants/Constants";

export const CreateAccountFooter = () => {
  const { steps, setSteps, setPages } = useContext(CreateAccountContext);
  return (
    <div>
      {steps === "2" ? (
        <Button variant="primary" size="md" onClick={() => setSteps("3")}>
          Sign up
        </Button>
      ) : steps === "3" || steps === "4" ? (
        <Button
          variant="default"
          size="md"
          onClick={() => (steps === "3" ? setSteps("4") : setPages(HOME))}
        >
          Next
        </Button>
      ) : (
        <Button variant="default" size="md" onClick={() => setSteps("2")}>
          Create account
        </Button>
      )}
    </div>
  );
};
