import React, { useState } from "react";
// import { authenticateUser } from "./Api";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";

const TableWrapper = styled(Table)`
  margin: auto;
  border: red;
`;

const userInitialValue = {
  name: "",
  email: "",
  age: "",
  mobile_num: "",
};

const Users = ({
  users,
  setName,
  name,
  setAge,
  age,
  setEmail,
  email,
  setMobile_num,
  mobile_num,
  addUser,
  deleteUser,
}) => {
  const [user, setUser] = useState(userInitialValue);
  const usersCollectionRef = collection(db, "users");

  // const onInputChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const addUser = async () => {
  // console.log(user);

  // await addDoc(usersCollectionRef, {
  //   name: name,
  //   age: age,
  //   email: email,
  //   mobile_num: mobile_num,
  // });

  // setNewUser(user);

  // let response = await authenticateUser(user);
  // console.log(response);
  // };

  return (
    <>
      <Box>
        <Typography>New User</Typography>
        <TextField
          required
          label="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Enter Your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          label="Enter Mobile No."
          value={mobile_num}
          onChange={(e) => setMobile_num(e.target.value)}
        />
        <Button variant="contained" onClick={() => addUser()}>
          Add New User
        </Button>
      </Box>
      <TableContainer>
        <TableWrapper>
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Email Id</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              return (
                <TableRow>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.mobile_num}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      Delete User
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableWrapper>
      </TableContainer>
    </>
  );
};

export default Users;
