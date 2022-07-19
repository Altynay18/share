import "./Mentorship.css";
import Header from "../Header";
import SideBar from "../SideBar";
import { useEffect, useCallback } from "react";
import { useFormik } from "formik";
import { useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Service } from "../../service/Service";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
const Mentorship = () => {
  const service = new Service()
  const [link, setLink] = useState("");

  const validate = (values) => {
    const errors = {};

    return errors;
  };
  const formik = useFormik({
    initialValues: {
        email1: "",
        email2: "",
        email3: "",

      }
    ,
    validate,
    onSubmit: (values) => {
    service.startMeeting(values);
    setLink("https://meet.google.com/avu-ctaa-mrfz");
      console.log(values);
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="profileLayout">
      <div className="navigation">
        <SideBar></SideBar>
      </div>
      <div className="profileBody">
        <div className="header">
          <Header></Header>
        </div>
        <div style={{ paddingLeft: "8rem" }}>
          <div className="feedContent">
            <Text
              fontSize="3xl"
              fontWeight={"600"}
              align={"left"}
              marginBottom={"3rem"}
            >
              Доступные онлайн собрания / митинги
            </Text>
            <Button color="gray.700"><a href={link}>{link=="" ? "" : link}</a></Button>
            <Text
              fontSize="3xl"
              fontWeight={"600"}
              align={"left"}
              marginBottom={"3rem"}
            >
              Менторство
            </Text>
            <Button onClick={onOpen}>+ Cоздать митинг</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Создать новый митинг</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <form
                    className="mt-8 space-y-6"
                    onSubmit={formik.handleSubmit}
                  >
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div color="#000000">
                        <p htmlFor="email-address" className="sr-only">
                          Тема собрания 
                        </p>
                     
                      </div>
                      <div>
                  <label htmlFor="email-address" className="sr-only">
                    Участник 1
                  </label>
                  <input
                    id="email1"
                    name="email1"
                    type="email"
                    autoComplete="email"
                    required
                    className="loginInput appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Участник 1"
                    value={formik.values.email1}
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Участник 2
                  </label>
                  <input
                    id="email2"
                    name="email2"
                    type="email"
                    autoComplete="email"
                    required
                    className="loginInput appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Участник 2"
                    value={formik.values.email2}
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Участник 3
                  </label>
                  <input
                    id="email3"
                    name="email3"
                    type="email"
                    autoComplete="email"
                    required
                    className="loginInput appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Участник 3"
                    value={formik.values.email3}
                    onChange={formik.handleChange}
                  />
                </div>
                
              
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        type="submit"
                        onClick={onClose}
                        className=" loginBtn group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        style={{
                          backgroundColor: "#BCD7DA",
                          width: "154px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Создать
                      </button>
                    </div>
                  </form>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mentorship;
