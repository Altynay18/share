import "./AdminPage.css";
import Header from "../Header";
import SideBar from "../SideBar";
import UserCard from "../UserCard";
import { useState, useEffect, useCallback } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Avatar,
    Button,
    Text,
    background
  } from '@chakra-ui/react'
import { Service } from "../../service/Service";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const service = new Service();

  const getUsersAdmin = useCallback(async () => {
    const token = sessionStorage.getItem("access_token");
    console.log(token);
    const arr = await fetch(
      "http://164.92.192.48:8085/get-users",
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
    setUsers(arr);
  }, []);

  useEffect(() => {
    getUsersAdmin();
  }, []);

  console.log(users)
  return (
    <div className="profileLayout">
      <div className="navigation">
        <SideBar></SideBar>
      </div>
      <div className="profileBody">
        <Header></Header>
        <div className="profileContent">
          <div className="userInfo">
          <div className="uCard">
      <div className="avatarBackground"></div>
      <Avatar
        size="2xl"
        src="../../public/avatar.png"
        marginTop={"80px"}
      />{" "}
      <div className="userName">Admin</div>
      <div className="title">Admin</div>
  
    </div>
          </div>
          <div className="userRequests">
          <Text fontSize="3xl" margin={"2rem 0"} fontWeight={'600'}>
                    {" "}
                    Запросы на авторизацию:
                  </Text>
          <TableContainer>
  <Table variant='simple'>
    <Thead>
      
      <Tr>
        <Th>ID</Th>
        <Th>USERS</Th>
        <Th>Action</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
{users?.map((p)=>(
   <Tr key={p.id}>
   <Td>{p.id}</Td>
   <Td>{p.username}</Td>
   <Td ><Button onClick={()=>{service.acceptUser(p.id)
  } 
  }  >Verify</Button></Td>        
   <Td><Button onClick={()=>{service.acceptUser(p.id)
  } 
  }  >Decline</Button></Td>
 </Tr>
 
))}
     
    </Tbody>
  
  </Table>
</TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
