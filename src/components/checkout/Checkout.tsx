import CardContext from "../../context/CardContext";
import { useContext, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const Checkout = () => {
  const { items, addToCard, removeSingle, newPrice } = useContext(CardContext);
  const [refresh, setRefresh] = useState(false);
  console.log("newPrice", newPrice);
  console.log("items", items);
  return (
    <>
      {items.length === 0 ? (
        <Typography>"Your box is empty"</Typography>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography>"Your box:"</Typography>
          <div>
            {items.map((item: any, index: number) => {
              return (
                <Box key={index + " " + item.id}>
                  <Typography>{item.name}</Typography>
                  <Button
                    onClick={() => {
                      addToCard(item.id, item.name, item.price);
                      setRefresh(!refresh);
                    }}
                  >
                    Increase
                  </Button>
                  <Button
                    onClick={() => {
                      removeSingle(item.id);
                      setRefresh(!refresh);
                    }}
                  >
                    Decrease
                  </Button>
                  <Typography>{item.price}</Typography>
                  <Typography>{item.quantity}</Typography>
                  <Typography>{newPrice}</Typography>
                </Box>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default Checkout;
