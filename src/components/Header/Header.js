import { Flex, Box, Spacer, Wrap, WrapItem } from "@chakra-ui/react";
import { Avatar, Text } from "@chakra-ui/react";
import "./Header.css";
import { Service } from "../../service/Service";
const Header = () => {
  const service = new Service();
  return (
    <div className="mainHeader">
      <Flex minWidth="max-content" alignItems="center" gap="2" margin={"2rem"}>
        <Box p="2" display={"flex"} gap={4}></Box>
        <Spacer />
        <Text
          fontWeight={"bold"}
          marginRight={"1rem"}
          onClick={() => service.logout()}
        >
          Выйти
        </Text>
        <Wrap>
          <WrapItem>
            <Avatar name="Anna Kroya" src="https://bit.ly/tioluwani-kolawole" />
          </WrapItem>
        </Wrap>
      </Flex>
    </div>
  );
};

export default Header;
