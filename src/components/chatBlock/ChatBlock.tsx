import "./ChatBlock.scss";
import { Space } from "antd";
import Search from "antd/es/input/Search";
function ChatBlock() {
  const data = [
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
  ];
  return (
    <div className="chat_block">
      <div className="container">
        <div className="chat_block__content">
          <h1
            className="chat_block__content__title"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            участники сообщества
          </h1>
          <div className="chat_block__content__block">
            <div className="chat_block__content__block__info">
              <h1>Кубанычбеков азирет</h1>
              <div className="chat_block__content__aziret">
                <img
                  src="https://s3-alpha-sig.figma.com/img/b73c/da17/dba40b93b28597b135fea33ce44487ed?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hCGEZMU0akUeHXzY3OeRSW690Q1LKl2YIGSEL9s7jlAEfpVjEypN4K9GgdMC8v5pepl8YxIn3abwvKBCZqWI2WJvTvPSFdFJTzaGprMrV6wtLUotY5zUsMDUF83mqO0uGW8qp-BkAXlypt3UOL3koCHQYkA~vED4ZNMcNo5XtWXhZH4nvk7DHvOtWOtBpM2U7OYVBeMGXAJLEUnxmH3euO1zLlz7iow-E73GQqqMRWWRYWzUGIB~cIzKP~l55Qq01av3YMZkMLcIzf7lmVGrY5bDo1oL2YSb-OnSladJqCKe-UQu74f537GzXPuGsgfODyeC7fI-x0jJZv8qdjhZ9w__"
                  alt=""
                />
              </div>
            </div>
            <div className="chat_block__content__block__search">
              <Space direction="vertical">
                <Search
                  placeholder="input search text"
                  // onSearch={onSearch}
                  style={{ width: 200 }}
                  size="large"
                  width={39}
                />
              </Space>
            </div>
            <div className="chat_block__content__block__ul">
              {data?.map((el) => (
                <div className="chat_block__content__block__ul__li">
                  <div className="chat_block__content">
                    {/* <img src={el?.images} alt="imagea" /> */}
                  </div>
                  <div className="chat_block__content__info">
                    <h2>{el.title}</h2>
                    <p>{el.number}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBlock;
