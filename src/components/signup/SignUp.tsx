import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logInError, setLogInError] = useState("");
  const [formError, setFormError] = useState("");

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
    } catch (ex: any) {
      setFormError(ex.response.data.error.message);
    }
  }

  const navigate = useNavigate();

  const moveToLogIn = () => {
    navigate("/logIn");
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
          Sign up
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
          sx={{
            width: "20%",
            marginTop: "15px",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "15px",
            backgroundColor: "#c75146",
            color: "black",
            "&:hover": {
              backgroundColor: "#ad2e24",
            },
          }}
          variant="contained"
          onClick={checkCredentials}
        >
          Sign up
        </Button>
        <Button
          sx={{
            width: "20%",
            marginTop: "15px",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "15px",
            backgroundColor: "#c75146",
            color: "black",
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
            marginBottom: "15px",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "15px",
            backgroundColor: "#c75146",
            color: "black",
            "&:hover": {
              backgroundColor: "#ad2e24",
            },
          }}
          variant="contained"
          onClick={moveToLogIn}
        >
          Do you have already account?
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
        {formError === "INVALID_EMAIL" ? (
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
        {formError ===
        "WEAK_PASSWORD : Password should be at least 6 characters" ? (
          <Alert
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
            }}
            severity="error"
          >
            Password should be at least 6 characters
          </Alert>
        ) : null}
        {formError === "EMAIL_EXISTS" ? (
          <Alert
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
            }}
            severity="error"
          >
            Email exist
          </Alert>
        ) : null}
      </Box>
    </Box>
  );
};

export default SignUp;
