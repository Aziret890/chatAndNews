import "./Admin.scss";
import Header2 from "../header2/header2";
import { FaChevronLeft } from "react-icons/fa";
import { Button, Input, Text, Textarea, WrapItem } from "@chakra-ui/react";
import { create } from "../../utils/api/new-fetch";
import { useState } from "react";

function Admin() {
  const [values, setValues] = useState({
    title: "",
    text: "",
    image: "",
    date: Date.now(),
    id: Date.now(),
  });

  let handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  async function createdAt() {
    await create(values);
  }

  return (
    <>
      <Header2 />
      <section className="admin">
        <div className="container">
          <div className="admin__content pt-[100px]">
            <WrapItem>
              <Button background={"red"} colorScheme="twitter" gap={3}>
                <FaChevronLeft color="black" /> на главную станицу
              </Button>
            </WrapItem>
            <div className="admin__content__block">
              <div className="mt-[20px] admin__content__block-input" />
              <Input
                color="white"
                placeholder="название статии"
                _placeholder={{ color: "white" }}
                name="title"
                value={values.title}
                onChange={handleInputChange}
                required
                minLength={10}
              />
              <div />
              <div className="mt-[20px] admin__content__block-input" />
              <Input
                color="white"
                placeholder="фотография"
                _placeholder={{ color: "white" }}
                name="image"
                value={values.image}
                onChange={handleInputChange}
                required
              />
              <div />
              <div className="mt-[20px] admin__content__block-textArea">
                <Text color={"white"} mb="8px">
                  Введите описание:
                </Text>
                <Textarea
                  color={"white"}
                  placeholder="текст статии"
                  size="sm"
                  name="text"
                  value={values.text}
                  onChange={handleInputChange}
                  required
                  minLength={30}
                />
              </div>
            </div>
            <Button onClick={createdAt} mt={4}>
              Create
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
