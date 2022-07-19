import { Text } from "@chakra-ui/react";
import Header from "../Header";
import SideBar from "../SideBar";

const Training = () => {
  return (
    <>
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
              <Text size={"5xl"}>Coming soon</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Training;
