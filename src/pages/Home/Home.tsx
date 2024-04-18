import Filter from "../../components/filter/filter";
import Header from "../../components/header/Header";
import Kalendar from "../../components/Kalendar/kalendar";
import Newscomponent from "../../components/Newscomponent/newscompoent";
import { useAppSelector } from "../../store/store";
import "./Home.scss";
import "./Home.scss";
function Home() {
  const { news } = useAppSelector(({ news }) => news);
  console.log(news);

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
