import React, { useState, useEffect } from 'react';
import { useShop } from "../context/CartContext";
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box} from '@mui/material';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Product } from '../utils/Shopinterface';


const Products: React.FC<Product> = ({ id, image, price, title }) => {
  const { addToCart, removeFromCart, products } = useShop();
  const [isInCart, setIsInCart] = useState<boolean>(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.id === id);
    setIsInCart(!!productIsInCart);
  }, [products, id]);

  const handleClick = () => {
    const product = { id, image, price, title };
    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };


  return (
    <Card sx={{ maxWidth: "80rem", height: "15rem", display: 'flex', border: 0, boxShadow: "none", borderBottom: "2px solid #ccc", padding: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
              image={image}
              // alt={item.title}
            />
          </Box>
        </Grid>
        <Grid item xs={8} md={9}>
          <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {title}
              </Typography>
              {/* You can add description or other details here */}
            </Box>
            <Grid container justifyContent="space-between" alignItems="flex-end">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  ${price.toFixed(2)}
                </Typography>
              </Grid>
              <Grid item>
              <Button
                  variant="contained"
                  color={isInCart ? 'secondary' : 'primary'}
                  onClick={handleClick}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {isInCart ? <RiDeleteBin5Line style={{ width: 16, height: 16, color: "#fff" }} /> : 'Add to Cart'}
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Products;
