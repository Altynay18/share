import { useFormik } from "formik";
import "./Register.css";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { Service } from "../../service/Service";
import net from "../../assets/net.jpg";

const Register = () => {
  const service = new Service();
//   service.isAdmin();
  const validate = (values) => {
    const errors = {};
    // const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g;

   
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
        },
    validate,
    onSubmit: (values) => {
      service.handleLogin(values);
    },
  });

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
            <Image src={net} alt="net"></Image>
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
                    id="username"
                    name="username"
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
                
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
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
                  Войти
                </button>
              </div>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
export default Register;
