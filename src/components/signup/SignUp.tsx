import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logInError, setLogInError] = useState("");

  const onChangeName = (event: any) => {
    setName(event.target.value);
    console.log("name", name);
  };

  const onChangeSurname = (event: any) => {
    setSurname(event.target.value);
    console.log("surname", surname);
  };

  const onChangeUserName = (event: any) => {
    setUserName(event.target.value);
    console.log("userName", userName);
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
    console.log("password", password);
  };

  const onChangeConfirmPassword = (event: any) => {
    setConfirmPassword(event.target.value);
    console.log("confirmpassword", confirmPassword);
  };

  async function checkCredentials() {
    if (
      userName.length === 0 ||
      password.length === 0 ||
      name.length === 0 ||
      surname.length === 0
    ) {
      setLogInError("The field cannot be empty");
      return;
    } else {
      setLogInError("");
      console.log("Successfuly login");
    }
    if (password !== confirmPassword) {
      setLogInError("Password need to be the same");
    } else {
      setLogInError("");
    }
    try {
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7dR70_Rzaj6DAmgNS1tbUvfV-LqDBLmQ",
        { email: userName, password: password, returnSecureToken: true }
      );
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();

  const moveToLogIn = () => {
    navigate("/logIn");
  };
  return (
    <Container
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid red",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "center",
          border: "2px solid blue",
          width: "100%",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Sign up
        </Typography>
        <TextField
          sx={{ width: "40%", marginTop: "15px" }}
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={onChangeName}
          value={name}
        />
        <TextField
          sx={{ width: "40%", marginTop: "15px" }}
          id="standard-basic"
          label="Surname"
          variant="standard"
          onChange={onChangeSurname}
          value={surname}
        />
        <TextField
          sx={{ width: "40%", marginTop: "15px" }}
          id="standard-basic"
          label="Email or username"
          variant="standard"
          onChange={onChangeUserName}
          value={userName}
        />
        <TextField
          sx={{ width: "40%", marginTop: "15px" }}
          id="standard-basic"
          label="Password"
          variant="standard"
          onChange={onChangePassword}
          value={password}
        />
        <TextField
          sx={{ width: "40%", marginTop: "15px" }}
          id="standard-basic"
          label="Conform password"
          variant="standard"
          onChange={onChangeConfirmPassword}
          value={confirmPassword}
        />
        <Button
          sx={{ width: "20%", marginTop: "15px" }}
          variant="contained"
          onClick={checkCredentials}
        >
          Sign up
        </Button>
        <Button sx={{ width: "20%", marginTop: "15px" }} variant="contained">
          Forget Password
        </Button>
        <Button
          sx={{ width: "20%", marginTop: "15px", marginBottom: "15px" }}
          variant="contained"
          onClick={moveToLogIn}
        >
          Do you have already account?
        </Button>
        {logInError ? (
          <Alert severity="error">This is an error alert — check it out!</Alert>
        ) : null}
      </Box>
    </Container>
  );
};

export default SignUp;
