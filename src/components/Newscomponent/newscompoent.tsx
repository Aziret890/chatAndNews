import imgLog from "../../assets/img.jpg";
import flow from "../../assets/flowers.jpg";
import cat from "../../assets/кет.jpg";
import GroupFhoto from "../../assets/счастливая-группа-молодых-многорасовых-людей.webp";
import scss from "../Newscomponent/newscomonent.module.scss";

function Newscomponent() {
  return (
    <>
      <div id="mainnews">
        <div className="container">
          <div className={scss.newsMainBlock}>
            <div className="news">
              <img src={imgLog} alt="" style={{ width: "100%" }} />
              <h1 className={scss.newsTitle}>Title</h1>
              <h3 className="h2">
                Всего за 4 часа научим <br />
                основам SEO продвижения сайта
              </h3>
            </div>
            <div className="news">
              <img src={flow} alt="" style={{ width: "100%" }} />
              <h1 className={scss.newsTitle}>Title</h1>
              <h3 className="h2">
                Всего за 4 часа научим <br />
                основам SEO продвижения сайта
              </h3>
            </div>
            <div className="news">
              <img src={cat} alt="" />
              <h1 className={scss.newsTitle}>Title</h1>
              <h3 className="h2">
                Всего за 4 часа научим <br />
                основам SEO продвижения сайта
              </h3>
            </div>
          </div>
          <div className="news">
            <img src={GroupFhoto} alt="" />
            <h1 className={scss.newsTitle}>Title</h1>
            <h3 className="h2">
              Всего за 4 часа научим <br />
              основам SEO продвижения сайта
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newscomponent;
