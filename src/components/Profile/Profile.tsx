import "./Profile.scss";
import Header from "../Header";
import SideBar from "../SideBar";
import UserCard from "../UserCard";
import AddPost from "../AddPost";
import {useState, useEffect, useCallback} from "react";
// @ts-ignore  
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";

import Posts from "../Posts";
// @ts-ignore  
import {useFormik} from "formik";
import Projects from "../Projects/Projects";
import {stringify} from "querystring";

// interface Errors {
//   password: string;
// }

const Profile = () => {
  const validate = (values: any) => {
    const errors = {};
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values: any) => {

    },
  });

  const [data, setData] = useState([]);

  const getUserPosts = useCallback(async () => {
    const token = sessionStorage.getItem("access_token");
    console.log(token);
    const arr = await fetch(
      "http://164.92.192.48:8085/reflection/posts?page=0",
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

  useEffect(() => {
    getUserPosts();
  }, []);

  console.log("data", data);
  return (
    <div className="profileLayout">
      <div className="navigation">
        <SideBar></SideBar>
      </div>
      <div className="profileBody">
        <Header></Header>
        <div className="profileContent">
          <div className="userInfo">
            <UserCard></UserCard>
          </div>
          <div className="userPosts">
            <Tabs>
              <TabList>
                <Tab fontWeight={"600"}>Мои посты</Tab>
                <Tab fontWeight={"600"} marginLeft={"3rem"}>
                  Написать пост
                </Tab>
                <Tab fontWeight={"600"} marginLeft={"3rem"}>
                  Мои проекты
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"2rem"}
                  textAlign={"left"}
                >
                  <Text fontSize="3xl" margin={"1rem 0"}>
                    {" "}
                    Мои рефлексии:
                  </Text>
                  <Posts postsArr={data} />
                </TabPanel>
                <TabPanel>
                  <AddPost></AddPost>
                </TabPanel>
                <TabPanel >
                  <Projects></Projects>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
