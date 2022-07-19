import { ChatIcon } from "@chakra-ui/icons";
import {
  Box,
  Badge,
  Text,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useCallback } from "react";
import { Service } from "../../service/Service";
import { useFormik } from "formik";
import { Divider } from "@chakra-ui/react";
const Posts = ({ postsArr }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postData, setPostData] = useState({});
  // const [liked, setLiked] = useState("");
  const [count, setCount] = useState(0);
const[pid, setId] = useState(1);

  const getPostData = useCallback(async (postID) => {
    const token = sessionStorage.getItem("access_token");
    console.log(token);
    setId(postID);
    const arr = await fetch(
      `http://164.92.192.48:8085/reflection/post/${postID}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: ` ${token}`,
        },
      }
    )
      .then((arr) => arr.json())
      .catch((err) => {
        console.error(err);
      });
    console.log("arr", arr);
    setPostData(arr);
  }, []);

  console.log("postsARR", postsArr)
  const sendComment=useCallback(async(comment, pid)=>{
    const token = sessionStorage.getItem("access_token");
    console.log(token);
    console.log(JSON.stringify(comment));
    const res = await fetch(
      `http://164.92.192.48:8085/reflection-comment?content=${comment}&name=name&postId=${pid}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: ` ${token}`,
        },
      }
    );
    const resJson = await res.text();
    console.log(resJson);
  },[])

  // const service = new Service();
  const validate = (values) => {
    const errors = {};

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validate,
    onSubmit: (values) => {
      sendComment(values["content"], pid);
      values.content=""
    },
  });
console.log(postData)
  return (
    <>
      {postsArr?.map((p) => (
        <Box
          key={p.id}
          width={"70%"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          marginBottom={"3rem"}
        >
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" backgroundColor={"#FFCA7A"}>
                {p.username}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                11 Июля &bull; 12:05
              </Box>
            </Box>
            <Divider color={"#000000"} />
            <Box as="span" color="gray.600" fontSize="sm">
              <Text textAlign={"left"} fontSize="md" margin={"2rem"}>
                {p.title}
              </Text>
              <Text textAlign={"left"} fontSize="md" margin={"2rem"}>
                {p.content}
              </Text>
            </Box>
            <Box display="flex" gap="2rem" alignItems="baseline">
              <Badge
                borderRadius="full"
                px="2"
                backgroundColor={"#F5F5F5"}
                display={"flex"}
                gap="10px"
                fontSize="xs"
                onClick={() => setCount(count + 1)}
              >
                <svg
                  strokeWidth="currentColor"
                  fill="red"
                  viewBox="0 0 512 512"
                  focusable="false"
                  className="chakra-icon css-1i1i0ua"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                </svg>{" "}
                <Box>Нравится {count} </Box>
              </Badge>
              <Badge borderRadius="full" px="2" backgroundColor={"#F5F5F5"}>
                <span>
                  <ChatIcon></ChatIcon> Комментарии
                </span>
              </Badge>
              <Badge
                onClick={() => {
                  getPostData(p.id);
                  console.log(p.id);
                  onOpen();
                }}
                borderRadius="full"
                px="2"
                backgroundColor={"#F5F5F5"}
              >
                <span>More</span>
              </Badge>
              <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                <ModalContent>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box
                      key={p.id}
                      width={"100%"}
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      marginBottom={"2rem"}
                      marginTop={"2rem"}
                    >
                      <Box p="6">
                        <Box display="flex" alignItems="baseline">
                          <Badge
                            borderRadius="full"
                            px="2"
                            backgroundColor={"#FFCA7A"}
                          >
                            Нурсулу Оспан
                          </Badge>
                          <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                          >
                            11 Июля &bull; 12:05
                          </Box>
                        </Box>
                        <Box as="span" color="gray.600" fontSize="sm">
                          <Text
                            textAlign={"left"}
                            fontSize="md"
                            marginTop={"1rem"}
                          >
                            <Badge
                              borderRadius="full"
                              px="2"
                              backgroundColor={"#BCD7DA"}
                            >
                              Тема рефлексии:{postData?.title}
                            </Badge>
                          </Text>
                          <Box
                            border={"1px solid"}
                            borderColor={"#ffffff"}
                            borderRadius={"8px"}
                          >
                            <Text
                              textAlign={"left"}
                              fontSize="md"
                              margin={"1rem"}
                            >
                              {postData?.content}
                            </Text>
                          </Box>

                          <Badge
                            borderRadius="full"
                            px="2"
                            backgroundColor={"#BCD7DA"}
                          >
                            Комментарии:
                          </Badge>
                          <br></br>
                          {postData && postData.comment
                            ? postData.comment.map((q) => (
                              <>
                              {/* {q.firstname}  {q.lastname} */}
                                <Box
                                  key={q.id}
                                  border={"1px solid"}
                                  borderColor={"#BCD7DA"}
                                  borderRadius={"8px"}
                                  marginBottom={"1rem"}
                                  marginLeft={"3rem"}
                                >
                                                                <Text
                                    textAlign={"left"}
                                    fontSize="md"
                                    margin={"1rem"}
                                    color={"#5891F9"}
                                    fontWeight={'600'}
                                  >
                                    {q.firstname}  {q.lastname}
                                  </Text>
                                  <Text
                                    textAlign={"left"}
                                    fontSize="md"
                                    margin={"1rem"}
                                  >
                                    {q.content}
                                  </Text>
                                </Box>
                                </>
                              ))
                            : ""}
                          <Box>
                            <Badge
                              borderRadius="full"
                              px="2"
                              backgroundColor={"#FFCA7A"}
                            >
                              Написать комментарии:
                            </Badge>
                            <form
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              onSubmit={formik.handleSubmit}
                            >
                              <input
                                id="comment"
                                name="content"
                                type="text"
                                required
                                className="loginInput appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Пишите комментарии здесь"
                                value={formik.values.content}
                                onChange={formik.handleChange}
                              />{" "}
                              <button
                                type="submit"
                                style={{
                                  backgroundColor: "#BCD7DA",
                                }}
                              >
                                Отправить
                              </button>
                            </form>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" onClick={onClose}>
                      Закрыть
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default Posts;
