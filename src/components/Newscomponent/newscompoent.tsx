import scss from "../Newscomponent/newscomonent.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../../utils/api/new-fetch";
import { INewsItem, setNews } from "../../store/slice/news-slice";
import { useAppSelector } from "../../store/store";
import { useNavigate } from "react-router-dom";

function Newscomponent() {
  const dispatch = useDispatch();
  const { news } = useAppSelector(({ news }) => news);
  const nav = useNavigate();

  async function get() {
    const result = await getNews();
    dispatch(setNews(result as INewsItem[]));
  }
  useEffect(() => {
    get();
  }, []);

  function cardCLickHandler(id: any) {
    nav("/news/" + id);
  }
  return (
    <>
      <div className="mainnews">
        <div className="container">
          <div className={scss.newsMainBlock}>
            {news.map((el) => (
              <>
                <div
                  className="news"
                  style={{ maxWidth: "100%" }}
                  onClick={() => cardCLickHandler(el.id)}
                >
                  <img src={el.image} alt="" style={{ maxWidth: "100%" }} />
                  <h1 className={scss.newsTitle}>{el.title}</h1>
                  <h3 className="h2">
                    {el.text}
                    <br />
                  </h3>
                </div>
                {/* <div className="news">
                  <img src={el.image} alt="" />
                  <h1 className={scss.newsTitle}></h1>
                  <h3 className="h2">
                    Всего за 4 часа научим <br />
                  </h3>
                </div> */}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Newscomponent;
