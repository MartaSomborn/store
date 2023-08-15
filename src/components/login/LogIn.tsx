import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";

const LogIn = () => {
  const [form, setForm] = useState({ login: "", password: "" });
  const [logError, setLogError] = useState({ login: "", password: "" });
  const [msgError, setMsgError] = useState("");

  const onChangeForm = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const checkErrors = () => {
    if (form.login.length === 0) {
      setLogError({ ...logError, login: "The field cannot be empty" });
      return "The field cannot be empty";
    } else if (form.password.length === 0) {
      setLogError({ ...logError, password: "The field cannot be empty" });
      return "The field cannot be empty";
    } else if (form.login.length < 4) {
      setLogError({
        ...logError,
        login: "The field cannot have less than 4 signs",
      });
      return "The field cannot have less than 4 signs";
    } else if (form.password.length < 5) {
      setLogError({
        ...logError,
        password: "The field cannot have less than 5 signs",
      });
      return "The field cannot have less than 5 signs";
    }
  };

  async function checkCredentials() {
    const checkedErrors = checkErrors();

    if (checkedErrors) {
      return;
    }
    try {
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7dR70_Rzaj6DAmgNS1tbUvfV-LqDBLmQ",
        {
          email: form.login,
          password: form.password,
          returnSecureToken: true,
        }
      );
      localStorage.setItem("name", form.login);
      navigate("/");
    } catch (ex: any) {
      setMsgError(ex.response.data.error.message);
      console.log("error", ex.response.data.error.message);
      console.log(ex);
    }
    setForm({ login: "", password: "" });
  }

  const navigate = useNavigate();

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
          onChange={onChangeForm}
          value={form.login}
          name="login"
        />
        <TextField
          sx={{ width: "40%", marginTop: "15px" }}
          id="standard-basic"
          label="Password"
          variant="standard"
          onChange={onChangeForm}
          value={form.password}
          name="password"
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
        <Link to={"/signup"}>
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
            Do you have an account?
          </Button>
        </Link>
        {logError.login ? (
          <Alert
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
            }}
            severity="error"
          >
            {logError.login}
          </Alert>
        ) : null}
        {logError.password ? (
          <Alert
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
            }}
            severity="error"
          >
            {logError.password}
          </Alert>
        ) : null}
        {msgError ? (
          <Alert
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
            }}
            severity="error"
          >
            {msgError}
          </Alert>
        ) : null}
        {msgError === "INVALID_EMAIL" ? (
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
        {msgError === "MISSING_PASSWORD" ? (
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
        {msgError === "EMAIL_NOT_FOUND" ? (
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
        {msgError === "INVALID_PASSWORD" ? (
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
