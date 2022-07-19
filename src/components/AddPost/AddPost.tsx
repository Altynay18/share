import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Service } from "../../service/Service";
import { useFormik } from "formik";
import "./AddPost.scss";

const Profile = () => {
  // const service = new Service();
  const validate = (values: any) => {
    const errors = {};
    const passRegex = /^(.)/g;

    if (!passRegex.test(values.password)) {
      // errors.password = "";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validate,
    onSubmit: (values) => {
      // event.preventDefault();

      console.log(values);
      alert(JSON.stringify(values, null, 2));
      // service.addPost(values);
      values.content=""
      values.title=""
    },
  });

  return (
    <>
      <Box
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text margin={"2rem 0"} fontWeight={"600"}>
          О чем Вы хотите поделиться?
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <Text fontWeight={"600"}>Тема рефлексии</Text>
          <input
            className="postTitle"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
          ></input>
          <Text fontWeight={"600"}>Содержимое</Text>
          <textarea
            className="postContent"
            name="content"
            value={formik.values.content}
            onChange={formik.handleChange}
          ></textarea>
          <Box
            padding={"1rem"}
            display={"flex"}
            justifyContent={"right"}
            alignItems={"right"}
          >
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Прикрепить
              </MenuButton>
              <MenuList>
                <MenuItem>Add image</MenuItem>
                <MenuItem>Add video</MenuItem>
                
              </MenuList>
            </Menu>
          </Box>
          <Box
            padding={"1rem"}
            display={"flex"}
            justifyContent={"right"}
            alignItems={"right"}
          >
            <button
              type="submit"
              style={{
                backgroundColor: "#FFCA7A",
                width: "154px",
                height: "40px",
                textAlign: "center",
                fontWeight: "600",
                borderRadius: "10px",
              }}
            >
              Отправить
            </button>
          </Box>
        </form>
      </Box>
    </>
  );
};
export default Profile;
