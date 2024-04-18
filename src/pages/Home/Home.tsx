import { useDispatch } from "react-redux";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/Header";
import Kalendar from "../../components/Kalendar/kalendar";
import Newscomponent from "../../components/Newscomponent/newscompoent";
import { useAppSelector } from "../../store/store";
import "./Home.scss";
import "./Home.scss";
import { useAppSelector } from "../../store/store";
import { getNews } from "../../utils/api/new-fetch";
import { INewsItem, setNews } from "../../store/slice/news-slice";
import { useEffect } from "react";
function Home() {
  const dispatch = useDispatch();
  const { news } = useAppSelector(({ news }) => news);

  async function get() {
    const result = await getNews();
    dispatch(setNews(result as INewsItem[]));
  }
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <Header />
      <div className="Home__component">
        {news.length > 0 ? (
          <>
            <Filter />
            <Newscomponent />
          </>
        ) : (
          <div className="mt-[21%]">
            <div className="loader"></div>
          </div>
        )}
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
