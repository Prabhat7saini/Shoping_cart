import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container, Typography } from "@mui/material";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import { ProductType } from "../utils/Shopinterface";

const Home: React.FC = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<ProductType[] | null>(null);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<ProductType[]>(API_URL);
      setPosts(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {loading ? (
        <Grid container justifyContent="center">
          <Spinner />
        </Grid>
      ) : posts && posts.length > 0 ? (
        <Grid container spacing={4} justifyContent="center">
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={12} md={12} lg={12}>
              <Product id={post.id} image={post.image} price={post.price} title={post.description.split(" ").slice(0, 15).join(" ") + "..."} />
              
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "60vh" }}>
          <Typography variant="h6" color="textSecondary">
            No data found
          </Typography>
        </Grid>
      )}
    </Container>
  );
};

export default Home;
