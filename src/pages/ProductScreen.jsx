import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar.jsx';
import axios from "axios";
import styled from "styled-components";
import React,{useEffect,useState} from 'react'
import ProductScreens from "../components/ProductScreen/ProductScreens.jsx"

const Container = styled.div`
    height: 100em;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Products= styled.div`
    display: flex;
`

const Productss = styled.div`
    flex:1;
`

const Img = styled.div`
    height: 75%;
    z-index: 2;
`

const Id=styled.div``
const Title=styled.div``
const Desc = styled.div``
const Price = styled.div``
const Quantity = styled.div``
const Cate= styled.div``
const Sup=styled.div``


const ProductScreen = () => {

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
    <Container>
      <Announcement/>
      <Navbar/>
      <ProductScreens/>

      
    </Container>
  )
}

export default ProductScreen
