// import "./Profile.css";
import Header from "../Header";
import SideBar from "../SideBar";
import { Text } from "@chakra-ui/react";
import Posts from "../Posts";
import { useState, useEffect, useCallback } from "react";

const Feed = () => {
  const [data, setData] = useState([]);

  const getUserPostsFeed = useCallback(async () => {
    const token = sessionStorage.getItem("access_token");
    console.log(token);
    const arr = await fetch(
      `http://164.92.192.48:8085/reflection/posts?page=0`,
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
    getUserPostsFeed();
  }, []);

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
              Рефлексии других учителей:
            </Text>
            <Posts postsArr={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feed;
