import Filter from "../../components/filter/filter";
import Header from "../../components/header/Header";
import Kalendar from "../../components/Kalendar/kalendar";
import Newscomponent from "../../components/Newscomponent/newscompoent";
import "./Home.scss";
import "./Home.scss";
function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <div className="Home__component">
          <div className="hero">
            <Filter />
            <Kalendar />
          </div>
          <Newscomponent />
        </div>
      </div>
    </>
  );
}

export default Home;
