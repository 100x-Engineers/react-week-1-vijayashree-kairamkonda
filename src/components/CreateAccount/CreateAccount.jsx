import { CreateAccountFooter } from "./CreateAccountFooter";
import { CreateAccountHeader } from "./CreateAccountHeader";
import { CreateAccountMain } from "./CreateAccountMain";

export const CreateAccount = () => {
  return (
    <main className="flex flex-col  justify-between h-screen p-2">
      <div className="flex flex-col space-y-2">
        <CreateAccountHeader />

        <CreateAccountMain />
      </div>

      <div className="py-16" />
      <CreateAccountFooter />
    </main>
  );
};

export default CreateAccount;
