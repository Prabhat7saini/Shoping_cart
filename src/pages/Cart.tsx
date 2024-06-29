import { NavLink } from "react-router-dom";
import { useShop } from "../context/CartContext";
import React from "react";
import CartItem from "../components/CartItem";
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';


interface Product {
  id: number;
  title: string;
  //   description: string;
  image: string;
  price: number;
}

const Cart: React.FC = () => {
  const { products, total, clearCart } = useShop();
  const handleClear = () => {
    const product = { id: 0, image: "", price: 0, title: "" };
    clearCart(product)
  }
  return (
    <React.Fragment>
      <Container>
        {products.length > 0 ? (
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              {products.map((item: Product, index: number) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 3, marginTop: 3, position: 'sticky', top: 16 }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Your Cart
                </Typography>
                <Typography variant="h4" color="secondary" gutterBottom>
                  Summary
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Total Items:</strong> {products.length}
                </Typography>
                <Box mt={10}>
                  <Typography variant="h5">
                    Total Amount: ${total.toFixed(2)}
                  </Typography>
                </Box>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 3 }}>
                  Checkout Now
                </Button>
                <Button onClick={handleClear}>clear</Button>
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            textAlign="center"
            color="text.secondary">
            <Typography variant="h4" gutterBottom>
              Your cart is empty!
            </Typography>
            <NavLink to="/">
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}>
                Shop Now
              </Button>
            </NavLink>
          </Box>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Cart;
