import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Products from "../components/Products";
import Announcement from '../components/Announcement';
import styled from 'styled-components';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import CSKH from '../components/CSKH.jsx';

const Container = styled.div`
    height: 100em;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Product = () => {
    // const [products,setProducts]=useState([]);

    // useEffect(() => {
    //     const getAllProducts = async () => {
    //         try {
    //             const res = await axios.get("http://localhost:8800/api/products/getproduct");
    //             setProducts(res.data);
    //             console.log(res);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     getAllProducts()
    // }, []);

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Products/>
        <CSKH/>
        <Footer/>
    </Container>
  )
}

export default Product
