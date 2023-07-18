import CardContext from "../../context/CardContext";
import { useContext, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";
import "./../../App.css";

const Checkout = () => {
  const { items, addToCard, removeSingle, newPrice } = useContext(CardContext);
  const [refresh, setRefresh] = useState(false);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "#f5ebe0",
        marginTop: "130px",
      }}
    >
      <Navbar />
      {items.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "50px",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            "Your box is empty"
          </Typography>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "50px",
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            "Your box:"
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {items.map((item: any, index: number) => {
              return (
                <Box key={index + " " + item.id}>
                  <div
                    style={{
                      width: "600px",
                      display: "flex",
                      justifyContent: "space-between",
                      // flexDirection: "column",
                      // flexWrap: "wrap",
                      // alignContent: "center",
                      // alignItems: "center",
                      // marginTop: "30px",
                    }}
                  >
                    <img
                      style={{
                        height: "300px",
                        width: "200px",
                      }}
                      src={item.photo}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          fontSize: "30px",
                          textAlign: "center",
                          padding: "3px 0",
                        }}
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          fontSize: "20px",
                          textAlign: "center",
                          padding: "3px 0",
                        }}
                      >
                        {"Price " + item.price + " €"}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          fontSize: "20px",
                          textAlign: "center",
                          padding: "3px 0",
                        }}
                      >
                        {"Quantity " + item.quantity}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          fontSize: "20px",
                          textAlign: "center",
                          padding: "3px 0",
                        }}
                      >
                        {newPrice}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <Button
                          size="medium"
                          variant="contained"
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: 500,
                            fontSize: "15px",
                            backgroundColor: "#c75146",
                            color: "white",
                            "&:hover": {
                              backgroundColor: "#ad2e24",
                            },
                          }}
                          onClick={() => {
                            addToCard(item.id, item.name, item.price);
                            setRefresh(!refresh);
                          }}
                        >
                          Increase
                        </Button>
                        <Button
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: 500,
                            fontSize: "15px",
                            backgroundColor: "#c75146",
                            color: "white",
                            "&:hover": {
                              backgroundColor: "#ad2e24",
                            },
                          }}
                          size="medium"
                          variant="contained"
                          onClick={() => {
                            removeSingle(item.id);
                            setRefresh(!refresh);
                          }}
                        >
                          Decrease
                        </Button>
                      </div>
                    </Box>
                  </div>
                </Box>
              );
            })}
          </Box>
        </div>
      )}
    </Box>
  );
};
export default Checkout;
