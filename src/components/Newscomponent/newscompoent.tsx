import scss from "../Newscomponent/newscomonent.module.scss";
import React, { useEffect } from "react";
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
            {news.map((el, inx) => (
              <React.Fragment key={inx}>
                <div className="news max-w-[300px] min-w-[290px] h-[200px] mb-[20px]">
                  {el.image ? (
                    <img
                      src={el.image}
                      alt="news image"
                      style={{
                        maxWidth: "100%",
                        objectFit: "cover",
                        border: "0.1px solid #000",
                      }}
                    />
                  ) : (
                    <img
                      src={
                        "https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg"
                      }
                      alt="image not found"
                      style={{
                        maxWidth: "100%",
                        objectFit: "cover",
                        border: "0.1px solid #000",
                      }}
                    />
                  )}
               <React.Fragment/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newscomponent;
