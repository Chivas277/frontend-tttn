import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Products from "../components/Products";
import Announcement from '../components/Announcement';
import styled from 'styled-components';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import CSKH from '../components/CSKH.jsx';
import { useLocation } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductCate from "../components/ProductCate"
const Container = styled.div`
    height: 100em;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;  
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Title = styled.h1`
    margin: 20px;
`;

const Option = styled.option`

`;



const Product = () => {

  const location = useLocation();

  const title = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
        try {
            const res = await axios.get(
                title
                ? `http://localhost:8800/api/products/getproductcate?${title}`
                : "http://localhost:8800/api/products/getproduct");
            setProducts(res.data);
            //console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
    getAllProducts()
}, [title]);
//   const [filters, setFilters] = useState({});

//   const [filtershang, setFiltersHang] = useState({});

//   const [sort, setSort] = useState("Mới nhất");

//   const [sup,setSup]=useState([]);
//   const [cate, setCate] = useState([]);

//   useEffect(() => {
//     const getCate = async () => {
//         try {
//             const res = await axios.get("http://localhost:8800/api/categories/getcate");
//             setCate(res.data);
//             //console.log(res);
//         } catch (err) {
//             console.log(err);
//         }
//     };
//     getCate()
// }, []);

// useEffect(() => {
//   const getSup = async () => {
//       try {
//           const res = await axios.get("http://localhost:8800/api/suppliers/getsupplier");
//           setSup(res.data);
//           //console.log(res);
//       } catch (err) {
//           console.log(err);
//       }
//   };
//   getSup()
// }, []);



  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{title}</Title>    
        <Categories/>
        <ProductCate/>
        
        <CSKH/>
        <Footer/>
    </Container>
  )
}

export default Product
