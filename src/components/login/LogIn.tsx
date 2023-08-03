import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [logInError, setLogInError] = useState("");
  const [logError, setLogError] = useState("");

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
      localStorage.setItem("name", userName);
      navigate("/");
    } catch (ex: any) {
      setLogError(ex.response.data.error.message);
      console.log("error", ex.response.data.error.message);
    }
  }

  const navigate = useNavigate();

  const moveToSignUp = () => {
    navigate("/signup");
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5ebe0",
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Typography
          sx={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: "60px" }}
          variant="h3"
          gutterBottom
        >
          Login
        </Typography>
        <TextField
          sx={{
            width: "40%",
            marginTop: "15px",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "60px",
          }}
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
          sx={{
            width: "20%",
            marginTop: "15px",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "15px",
            backgroundColor: "#c75146",
            color: "white",
            "&:hover": {
              backgroundColor: "#ad2e24",
            },
          }}
          variant="contained"
          onClick={checkCredentials}
        >
          Login
        </Button>
        <Button
          sx={{
            width: "20%",
            marginTop: "15px",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "15px",
            backgroundColor: "#c75146",
            color: "white",
            "&:hover": {
              backgroundColor: "#ad2e24",
            },
          }}
          variant="contained"
        >
          Forget Password
        </Button>
        <Button
          sx={{
            width: "20%",
            marginTop: "15px",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "15px",
            backgroundColor: "#c75146",
            color: "white",
            "&:hover": {
              backgroundColor: "#ad2e24",
            },
          }}
          variant="contained"
          onClick={moveToSignUp}
        >
          Do you have an account?
        </Button>
        {logInError ? (
          <Alert
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
            }}
            severity="error"
          >
            {logInError}
          </Alert>
        ) : null}
        {logError === "INVALID_EMAIL" ? (
          <Alert
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
            }}
            severity="error"
          >
            Invalid email
          </Alert>
        ) : null}
        {logError === "MISSING_PASSWORD" ? (
          <Alert
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
            }}
            severity="error"
          >
            Missing password
          </Alert>
        ) : null}
        {logError === "EMAIL_NOT_FOUND" ? (
          <Alert
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
            }}
            severity="error"
          >
            Email not found
          </Alert>
        ) : null}
        {logError === "INVALID_PASSWORD" ? (
          <Alert
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
            }}
            severity="error"
          >
            Invalid password
          </Alert>
        ) : null}
      </Box>
    </Box>
  );
};

export default LogIn;
