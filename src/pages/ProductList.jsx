import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { publicRequest } from '../requestMethod.js';
import Products from "../components/Products";

const Product = () => {
    const [products,setProducts]=useState([]);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/products/getproduct");
                setProducts(res.data);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        getAllProducts()
    }, []);

  return (
   
    <Products/>
  )
}

export default Product
