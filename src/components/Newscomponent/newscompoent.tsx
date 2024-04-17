import scss from "../Newscomponent/newscomonent.module.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../../utils/api/new-fetch";
import { INewsItem, setNews } from "../../store/slice/news-slice";
import { useAppSelector } from "../../store/store";

function Newscomponent() {
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
      <div id="mainnews">
        <div className="container">
          <div className={scss.newsMainBlock}>
            {news.map((el, inx) => (
              <React.Fragment key={inx}>
                <div className="news" style={{ maxWidth: "100%" }}>
                  <img src={el.image} alt="" style={{ maxWidth: "100%" }} />
                  <h1 className={scss.newsTitle}>{el.title}</h1>
                  <h3 className="h2">
                    {el.info}
                    <br />
                  </h3>
                </div>
                {/* <div className="news">
                  <img src={el.image} alt="" />
                  <h1 className={scss.newsTitle}>Title</h1>
                  <h3 className="h2">
                    Всего за 4 часа научим <br />
                  </h3>
                </div> */}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Newscomponent;
