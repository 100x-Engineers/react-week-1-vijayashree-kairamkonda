import { useContext } from "react";
import { Login } from "./Pages/Login";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import { CreateAccountContext } from "./context/createAccount/CreateAccountContext";
import { CreateAccountProvider } from "./context/createAccount/CreateAccountProvider";
import { HomeFeed } from "./pages/HomeFeed/HomeFeed";
import { Profile } from "./pages/Profile/Profile";
import { HomeFeedProvider } from "./context/homeFeed/HomeFeedProvider";
import { CREATE_ACCOUNT, HOME, PROFILE } from "./constants/Constants";

function TwitterApp() {
  const { pages } = useContext(CreateAccountContext);
  return (
    <div className="h-screen w-screen bg-neutral-1000 font-inter text-neutral-50">
      {pages === CREATE_ACCOUNT ? (
        <CreateAccount />
      ) : pages === HOME ? (
        <HomeFeed />
      ) : pages === PROFILE ? (
        <Profile />
      ) : (
        <Login />
      )}
    </div>
  );
}

function App() {
  return (
    <div className="h-screen overflow-auto w-screen bg-neutral-1000 font-inter text-neutral-50">
      <CreateAccountProvider>
        <HomeFeedProvider>
          <TwitterApp />
        </HomeFeedProvider>
      </CreateAccountProvider>
    </div>
  );
}

export default App;
