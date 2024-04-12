import React from "react";
import "./Admin.scss";
import Header2 from "../header2/header2";
import { FaChevronLeft } from "react-icons/fa";
import {
  Button,
  ButtonGroup,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Textarea,
  WrapItem,
} from "@chakra-ui/react";
function Admin() {
  const [value, setValue] = React.useState("");
  const [show, setShow] = React.useState(false);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  const handleClick = () => setShow(!show);

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
              />
              <div />
              <div className="mt-[20px] admin__content__block-input" />
              <Input
                color="white"
                placeholder="фотография"
                _placeholder={{ color: "white" }}
              />
              <div />
              <div className="mt-[20px] admin__content__block-textArea">
                <Text color={"white"} mb="8px">
                  Введите текст: {value}
                </Text>
                <Textarea
                  value={value}
                  onChange={handleInputChange}
                  placeholder="текст статии"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
