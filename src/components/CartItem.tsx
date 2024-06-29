import React from "react";
import { Grid, Typography, IconButton, Card, CardContent, CardMedia, Box } from "@mui/material";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useShop } from "../context/CartContext";


import { CartItemProps } from "../utils/Shopinterface";

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart } = useShop();

  const removeHandler = () => {
    removeFromCart({ id: item.id, image: item.image, price: item.price, title: item.title });
  };

  return (
    <Card sx={{ maxWidth: "40rem", height: "15rem", display: 'flex', border: 0, boxShadow: "none", borderBottom: "2px solid #ccc", padding: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
              image={item.image}
              alt={item.title}
            />
          </Box>
        </Grid>
        <Grid item xs={8} md={9}>
          <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {item.title}
              </Typography>
              
            </Box>
            <Grid container justifyContent="space-between" alignItems="flex-end">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  ${item.price.toFixed(2)}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={removeHandler}
                  sx={{ backgroundColor: "#f44336", width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <RiDeleteBin5Line style={{ width: 16, height: 16, color: "#fff" }} />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartItem;
