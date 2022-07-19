import {useFormik} from "formik";
import "./Login.module.scss";
import {Flex, Box, Text, Image, Button} from "@chakra-ui/react";
import {Service} from "../../service/Service";
import {useNavigate} from "react-router-dom";
import {style} from "@mui/system";
import {useToast} from '@chakra-ui/react'
import net from "../../assets/images/net.jpg"

const Login = () => {
  const toast = useToast()

  const service = new Service();
  const validate = (values: any) => {
    const errors = {};


    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      school: "",
      city: "",

    },
    validate,
    onSubmit: (values) => {
      service.registerUser(values);
    },
  });
  const navigate = useNavigate();

  return (
    <>
      <Flex color="black">
        <Box
          flex="1.3"
          height={"100%"}
          textAlign={"left"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"left"}
        >
          <Text
            fontSize="8xl"
            color={"#001951"}
            fontWeight={"bold"}
            padding={"2rem 0 0 5rem"}
          >
            SHARE
          </Text>
          <Text
            fontSize="2xl"
            color={"#F7A325"}
            fontWeight={"bold"}
            padding={"1rem 0 0 5rem"}
          >
            School Hub for Action Research <br></br> in Education
          </Text>
          <Box margin={"0 8rem"}>
            {" "}
            <Image src={net} alt="net" />
          </Box>
        </Box>
        <Box
          flex="0.8"
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          borderTopLeftRadius={"3rem"}
          borderTopRightRadius={"3rem"}
          paddingTop={"15%"}
        >
          <Box>
            <Text fontSize="xl" color={"black"} fontWeight={"bold"}>
              Авторизация
            </Text>
          </Box>
          <Box>
            <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Почта
                  </label>
                  <input
                    id="email-address"
                    name="username"
                    type="email"
                    autoComplete="email"
                    required
                    className="loginInput appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Почта"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Пароль
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="loginInput appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Пароль"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {/* {formik.errors.password && (
                    <span>{formik.errors.password}</span>
                  )} */}
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Имя
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    autoComplete="text"
                    required
                    className="loginInput appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Имя"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Фамилия
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    autoComplete="text"
                    required
                    className="loginInput appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Фамилия"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Город
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="text"
                    required
                    className="loginInput appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Город"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Школа
                  </label>
                  <input
                    id="school"
                    name="school"
                    type="text"
                    autoComplete=""
                    required
                    className="loginInput appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Школа"
                    value={formik.values.school}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                  {/* <button
                  type="submit"
                  className=" loginBtn group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={{
                    backgroundColor: "#F7A325",
                    width: "154px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
              
                  Регистрация
                  
                </button> */}
                  <Button
                    type="submit"
                    onClick={() =>
                      toast({
                        title: 'Account created.',
                        description: "We've created your account for you.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      })
                    }
                  >
                    Show Toast
                  </Button>
                </div>
                <div >
                  Есть аккаунт? <br></br>
                  <span onClick={() => {navigate("/login")}} style={{color: '#F7A325'}}>Войдите</span>
                </div>

              </div>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
export default Login;
