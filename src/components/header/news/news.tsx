import imgLog from "../src/images/img.jpg";
import flow from "../src/images/flowers.jpg";
import cat from "../src/images/кет.jpg";
import GroupFhoto from "../src/images/счастливая-группа-молодых-многорасовых-людей.webp";
import "../news/news.scss";
function News() {
  return (
    <>
      <div
        id="header"
        style={{
          backgroundColor: "#151313",
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="headerMainBlock">
            <div className="header">
              <img src={imgLog} alt="" />
              <h1
                className="h1"
                style={{
                  fontWeight: "900",
                  color: "white",
                }}
              >
                Title
              </h1>
              <h3
                className="h2"
                style={{
                  color: "white",
                }}
              >
                Всего за 4 часа научим <br />
                основам SEO продвижения сайта
              </h3>
            </div>
            <div className="header">
              <img src={flow} alt="" />
              <h1
                className="h1"
                style={{
                  fontWeight: "900",
                  color: "white",
                }}
              >
                Title
              </h1>
              <h3
                className="h2"
                style={{
                  color: "white",
                }}
              >
                Всего за 4 часа научим <br />
                основам SEO продвижения сайта
              </h3>
            </div>
            <div className="header">
              <img
                style={{
                  width: "230px",
                }}
                src={cat}
                alt=""
              />
              <h1
                className="h1"
                style={{
                  fontWeight: "900",
                  color: "white",
                }}
              >
                Title
              </h1>
              <h3
                className="h2"
                style={{
                  color: "white",
                }}
              >
                Всего за 4 часа научим <br />
                основам SEO продвижения сайта
              </h3>
            </div>
          </div>
          <div className="header mianHeader">
            <img src={GroupFhoto} alt="" />
            <h1
              className="h1"
              style={{
                fontWeight: "900",
                color: "white",
              }}
            >
              Title
            </h1>
            <h3
              className="h2"
              style={{
                color: "white",
              }}
            >
              Всего за 4 часа научим <br />
              основам SEO продвижения сайта
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
