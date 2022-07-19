import { Avatar } from "@chakra-ui/react";
import "./UserCard.css";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState, useCallback,useEffect } from "react";

const UserCard = () => {
  const [user, setUser] = useState([]);

  const getCurrentUser = useCallback(async () => {
    const token = sessionStorage.getItem("access_token");
    console.log(token);
    const arr = await fetch(`http://164.92.192.48:8085/current-user`, {
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
    console.log(arr);

    setUser(arr);
  }, []);

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div className="uCard">
      <div className="avatarBackground"></div>
      <Avatar
        size="2xl"
        src="../../public/avatar.png"
        marginTop={"80px"}
      />{" "}
      <div className="userName">{user.firstname}  {user.lastname}</div>
      <div className="title">Личные данные</div>
      <TableContainer>
        <Table
          size="md"
          variant="simple"
          fontSize={"16px"}
          whiteSpace={"pre-wrap"}
        >
          <Tbody>
            <Tr>
              <Td fontWeight={"600"}>Место работы: </Td>
              <Td>Школа-гимназия им. Абая</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"600"}>Почта:</Td>
              <Td> {user.username}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"600"}>Город:</Td>
              <Td>Алматы</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"600"}>Стаж: </Td>
              <Td>12 лет</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      {/* <Button
        fontWeight={"500"}
        backgroundColor={"#FFCA7A"}
        width={"138px"}
        marginTop={"2rem"}
      >
        Редактировать
      </Button> */}
    </div>
  );
};
export default UserCard;
