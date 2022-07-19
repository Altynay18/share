// import "./Profile.css";
import Header from "../Header";
import SideBar from "../SideBar";
import {
  Text,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Badge
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState, useCallback, useEffect } from "react";
import { Service } from "../../service/Service";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import DiscussProject from "../DiscussProject/DiscussProject";

const IndividualProject = () => {
  const [projects, setProjects] = useState([]);
  const { projectId = "" } = useParams();
  console.log("id:", projectId)

  const [data, setData] = useState([]);

  const getProjectDiscussion = useCallback(async () => {
    const token = sessionStorage.getItem("access_token");
    console.log(token);
    const arr = await fetch(
      `http://164.92.192.48:8085/science/posts?page=0`,
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
    setData(arr);
  }, []);

  console.log("data", data)
  const getProjects = useCallback(async () => {
    const token = sessionStorage.getItem("access_token");
    console.log(token);
    const arr = await fetch(`http://164.92.192.48:8085/projects`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: ` ${token}`,
      },
    })
      .then((arr) => arr.json())
      .catch((err) => {
        console.error(err);
      });
    // console.log(arr);

    setProjects(arr);
  }, []);

  useEffect(() => {
    getProjects();
    getProjectDiscussion();

  }, []);

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
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      service.addPost(values);
    },
  });
  return (
    <div className="profileLayout">
      <div className="navigation">
        <SideBar></SideBar>
      </div>
      <div className="profileBody">
       
        <div className="header">
          <Header></Header>
        </div >
        <div style={{ paddingLeft: "8rem" }}>
          <div className="feedContent">
          {
        projects?.map((r)=>(
          (r.id == projectId) ? 
          <div key={r.id}>
          <Text
          fontSize="3xl"
          fontWeight={"600"}
          align={"left"}
          marginBottom={"3rem"}
        >
          {r.title}
        </Text>
        <Box marginBottom={"3rem"} border={'1px solid #808080'} borderRadius={'12px'} padding={'2rem'} textAlign='left'>
          <Text marginBottom={"1rem"} fontSize="2xl" fontWeight={"600"} color={'#F7A325'}>Последние обновления от других участников проекта:</Text>
          {data?.map((t)=>(
          <>
          <Badge borderRadius="full" px="2" backgroundColor={"#FFCA7A"}>
          Учитель {t.ownerId} 

              </Badge>
            <Box key={t.id} border={'1px solid #E5E7EB'} borderRadius={'12px'} padding={'0.5rem'} marginBottom={'1rem'}>
                {t.content} 
            </Box>
            </>
          ) )
        }  
        </Box>
        </div> 
        : "")) }
         <DiscussProject></DiscussProject>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndividualProject;
