import Header from "../../components/header/Header";
import "./NewsDetail.scss";
import { useParams } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

function NewsDetail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { id } = useParams();
  const news = useSelector((state: RootState) =>
    state.news.news.find((el) => el.id == id)
  );

  console.log(news);
  return (
    <>
      <Header />
      <section className="new_detail">
        <div className="container">
          <div className="new_detail__content">
            <div className="new_detail__content">
              <div className="new_detail__content_infos">
                {news && (
                  <div className="new_detail__content_info">
                    <div className="new_detail__content_info_left">
                      <img src={news.image} alt="" />
                    </div>
                    <div className="new_detail__content_info_rigth">
                      <h2>{news.title}</h2>
                      <p>{news.text}</p>
                      <div>
                        <h1>Комментарии</h1>
                        <button>Оставить комментарий</button>
                        <>
                          <Button onClick={onOpen}>Оставить комментарий</Button>
                          <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                            isCentered
                          >
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader>
                                Оставте новый комментарий
                              </ModalHeader>
                              <ModalCloseButton />
                              <ModalBody pb={6}>
                                <FormControl>
                                  <FormLabel>ваш комментарий</FormLabel>
                                  <Input
                                    ref={initialRef}
                                    placeholder="ваш комментарий"
                                  />
                                </FormControl>

                                <FormControl mt={4}>
                                  {/* <FormLabel>Last name</FormLabel> */}
                                  {/* <Input placeholder="Last name" /> */}
                                </FormControl>
                              </ModalBody>

                              <ModalFooter>
                                <Button colorScheme="blue" mr={3}>
                                  Отправить
                                </Button>
                                <Button onClick={onClose}>Закрыть</Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                        </>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="new_detail__content_comments">
                <div className="new_detail__content_comment">
                  <div className="new_detail__content_comment_flex">
                    <div>
                      <h2>Татьяна Осипова</h2>
                      <p>05:03:2024</p>
                    </div>
                    <div>vnweponvevwebpvb</div>
                  </div>
                  <div>
                    <p>
                      «В Энгельсе сегодня ранним утром ликвидировали БПЛА.
                      Пострадавших и разрушений инфраструктуры при падении
                      обломков предварительно нет
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsDetail;
