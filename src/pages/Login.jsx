import { LoginHeader } from "../components/Login/LoginHeader";
import LoginMain from "../components/Login/LoginMain";

export const Login = () => {
  return (
    <div className="flex md:flex-row items-center justify-between h-32rem py-6  px-0.5 flex-col md:justify-around md:h-screen lg:mx-20">
      <LoginHeader />
      <LoginMain />
    </div>
  );
};
