import UserPRofile from "../../components/UserProfile/UserPRofile";
import Header from "../../components/header/Header";
import Newscomponent from "../../components/Newscomponent/newscompoent";

function Home() {
  return (
    <>
      <Header />
      <Newscomponent />
      <UserPRofile />
    </>
  );
}

export default Home;
