import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFormTypes {
  login: string;
  password: string;
}

const LogIn = () => {
  const [form, setForm] = useState<IFormTypes>({ login: "", password: "" });
  let [logError, setLogError] = useState<IFormTypes>({
    login: "",
    password: "",
  });
  const [msgError, setMsgError] = useState("");

  const onChangeForm = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const checkErrors = () => {
    if (form.login.length === 0) {
      setLogError((prev) => {
        return {
          ...prev,
          login: "The username field cannot be empty",
        };
      });
      console.log(logError, "logError Login");
      return "The username field cannot be empty";
    } else if (form.password.length === 0) {
      setLogError((prev) => {
        return {
          ...prev,
          password: "The password field cannot be empty",
        };
      });
      console.log(logError, "logError Password");
      return "The password field cannot be empty";
    } else if (form.login.length < 4) {
      setLogError((prev) => {
        return {
          ...prev,
          login: "The login field cannot have less than 4 signs",
        };
      });
      return "The login field cannot have less than 4 signs";
    } else if (form.password.length < 5) {
      setLogError((prev) => {
        return {
          ...prev,
          password: "The password field cannot have less than 5 signs",
        };
      });
      return "The password field cannot have less than 5 signs";
    }

    return null;
  };

  async function checkCredentials() {
    setLogError({ login: "", password: "" });
    console.log(logError, "error in Credentials");
    const checkedErrors = checkErrors();

    if (checkedErrors) {
      if (checkedErrors === "The username field cannot be empty") {
        return "The username field cannot be empty";
      } else if (checkedErrors === "The password field cannot be empty") {
        return "The password field cannot be empty";
      } else if (
        checkedErrors === "The login field cannot have less than 4 signs"
      ) {
        return "The login field cannot have less than 4 signs";
      } else if (
        checkedErrors === "The password field cannot have less than 5 signs"
      ) {
        return "The password field cannot have less than 5 signs";
      }
    }

    if (checkedErrors) {
      toast.error("Login was not successful", {
        position: toast.POSITION.TOP_RIGHT,
      });
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
      toast.success("You are log in", {
        position: toast.POSITION.TOP_RIGHT,
      });
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
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: {
              xl: "50px",
              lg: "50px",
              md: "40px",
              sm: "40px",
              xs: "30px",
            },
            marginTop: { sm: "40px", xs: "80px" },
          }}
          variant="h3"
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
          sx={{ width: "40%", marginTop: "15px", marginBottom: "20px" }}
          id="standard-basic"
          label="Password"
          variant="standard"
          onChange={onChangeForm}
          value={form.password}
          name="password"
        />
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
        <Button
          sx={{
            width: "210px",
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

        <Link to={"/signup"}>
          <Button
            sx={{
              width: "210px",
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
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default LogIn;
