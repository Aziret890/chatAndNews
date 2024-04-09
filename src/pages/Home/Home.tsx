import Filter from "../../components/filter/filter";
import Header from "../../components/header/Header";
import Newscomponent from "../../components/Newscomponent/newscompoent";
import "./Home.scss";
function Home() {
  return (
    <>
      <Header />
      <div className="Home__component">
        <Filter />
        <Newscomponent />
      </div>
    </>
  );
}

export default Home;
