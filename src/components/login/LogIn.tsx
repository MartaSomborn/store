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

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [logInError, setLogInError] = useState("");

  const onChangeUserName = (event: any) => {
    setUserName(event.target.value);
    console.log("userName", userName);
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
    console.log("password", password);
  };

  async function checkCredentials() {
    if (userName.length === 0 || password.length === 0) {
      setLogInError("The field cannot be empty");
    } else {
      setLogInError("");
      console.log("Successfully login");
      setUserName("");
      setPassword("");
    }
    try {
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7dR70_Rzaj6DAmgNS1tbUvfV-LqDBLmQ",
        { email: userName, password: password, returnSecureToken: true }
      );
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();

  const moveToSignUp = () => {
    navigate("/signup");
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
          Login
        </Typography>
        <TextField
          sx={{ width: "40%", marginTop: "15px" }}
          id="standard-basic"
          label="Username"
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
        <Button
          sx={{ width: "20%", marginTop: "15px" }}
          variant="contained"
          onClick={checkCredentials}
        >
          Login
        </Button>
        <Button sx={{ width: "20%", marginTop: "15px" }} variant="contained">
          Forget Password
        </Button>
        <Button
          sx={{ width: "20%", marginTop: "15px" }}
          variant="contained"
          onClick={moveToSignUp}
        >
          Do you have an account?
        </Button>
        {logInError ? (
          <Alert severity="error">This is an error alert — check it out!</Alert>
        ) : null}
      </Box>
    </Container>
  );
};

export default LogIn;
