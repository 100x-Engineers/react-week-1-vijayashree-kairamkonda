import { useContext } from "react";
import { Button } from "../shared/Button";
import { CreateAccountContext } from "../../context/createAccount/CreateAccountContext";
import { CREATE_ACCOUNT } from "../../constants/Constants";

const LoginMain = () => {
  const { setPages } = useContext(CreateAccountContext);
  return (
    <section className="flex flex-col justify-start space-y-2 lg:space-y-5">
      <h3 className="text-3xl md:text-5xl font-bold">Happening now</h3>
      <h4 className="text-lg md:text-2xl font-bold">Join today.</h4>
      <div>
        <Button
          variant="default"
          size="md"
          onClick={() => setPages(CREATE_ACCOUNT)}
        >
          Create Account
        </Button>
      </div>
      <div className="py-5 flex justify-between items-center w-full">
        <div className="w-5/12 h-px bg-neutral-700" />
        <div>or</div>
        <div className="w-5/12 h-px bg-neutral-700" />
      </div>
      <div>
        <p className="font-medium">Already have an account?</p>
        <Button variant="outline" size="md">
          Sign up
        </Button>
      </div>
    </section>
  );
};

export default LoginMain;
