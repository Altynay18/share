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
  import { Service } from "../../service/Service";
  import { useFormik } from "formik";
  import "./DiscussProject.scss";
  
  const DiscussProject = () => {
    const service = new Service();
    const validate = (values) => {
      const errors = {};
      const passRegex = /^(.)/g;
  
      if (!passRegex.test(values.password)) {
        errors.password = "";
      }
  
      return errors;
    };
  
    const formik = useFormik({
      initialValues: {
        title: "",
        content: "",
        file: '',
      },
      validate,
      onSubmit: (values) => {
  
        console.log(values);
        alert(JSON.stringify(values, null, 2));
        service.addProjectDiscussion(values);
        if(values.file) {
          service.sendPhotoRequest(values.file);
        }
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
          aligntext={"left"}
        >
          <Text margin={"1rem 0"} fontWeight={"600"}>
           Поделитесь последними обновлениями:
          </Text>
          <form onSubmit={formik.handleSubmit}>
            
            <Text fontWeight={"600"}>Содержимое</Text>
            <textarea
              className="postContent"
              name="content"
              id="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              type="textarea"
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
                  <label>Add image</label>
                 <input id="file" name="file"  type="file" onChange={(event)=>formik.setFieldValue('file', event.currentTarget.files[0])}></input>
                 <label>Add video</label>

                  <input></input> 
                 
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
  export default DiscussProject;
  