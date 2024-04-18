import Header from "../../components/header/Header";
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
import { useSelector } from "react-redux";

export function NewsDetail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { id } = useParams();
  const news = useSelector((state) =>
    state.news.find((item: { id: string | undefined }) => item.id === id)
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
                {" "}
                <div className="new_detail__content_info">
                  <div className="new_detail__content_info_left">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/9366/245d/b8e9ad075b7b6272c9e2c641cac4d953?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h6IFHrgGkt1v7fRLodv8PVT-AAFRtiH6KZv7mDvms6q1Y7cF5MxKV3Y2uZZ5hI3ZnfQSSIQdVPOeXL0JI0YhDLunpwx3x-TPxm6UoUmxa9jMDUqW1tKSQo~cEwCsGrxfYtxcs7DyN35RAIdhiKXsPkAf7SzM~MsWXUpK5WsgRuhCiixmImg6Hy~C4WS20hwWj-U92xrBZ~xFlE3EpQCyjppIZvLATP9vNaW6TGJUJBr~4lbP~16uJYL09~biFAhsoriL09UT~BQA4wy5qezYigl78p4u4xMtuGYGywSq6d5E6-WTwq1QUY1AliSk2D-QxcE6UdAhsAXycE91idT2Rw__"
                      alt=""
                    />
                  </div>
                  <div className="new_detail__content_info_rigth">
                    <h2>
                      {" "}
                      ОНЛАЙНВойна в Украине: российские власти сообщили об
                      атаках украинских дронов вблизи авиабаз под Ростовом и в
                      Энгельсе
                    </h2>
                    <p>
                      «В Энгельсе сегодня ранним утром ликвидировали БПЛА.
                      Пострадавших и разрушений инфраструктуры при падении
                      обломков предварительно нет». Из его формулировки
                      невозможно сделать однозначный вывод, уничтожен ли один
                      беспилотник или больше одного. В местном паблике писали о
                      множественных взрывах, но если воздушная цель сбивается
                      ракетами, то для перехвата нужны минимум две ракеты.
                      Энгельс известен прежде всего своей базой тяжелых
                      бомбардировщиков Ту-95 и Ту-22, которые используются для
                      обстрелов украинского тыла крылатыми ракетами с большого
                      расстояния, обычно из района Каспия. В паблике писали о
                      взрывах именно вблизи аэродрома. Он уже неоднократно
                      подвергался атакам украинских беспилотников.
                    </p>
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
                            <ModalHeader>Оставте новый комментарий</ModalHeader>
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
