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

  const [filters, setFilters] = useState({});

  const [filtershang, setFiltersHang] = useState({});

  const [sort, setSort] = useState("Mới nhất");

  const [sup,setSup]=useState([]);
  const [cate, setCate] = useState([]);

  useEffect(() => {
    const getCate = async () => {
        try {
            const res = await axios.get("http://localhost:8800/api/categories/getcate");
            setCate(res.data);
            //console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
    getCate()
}, []);

useEffect(() => {
  const getSup = async () => {
      try {
          const res = await axios.get("http://localhost:8800/api/suppliers/getsupplier");
          setSup(res.data);
          //console.log(res);
      } catch (err) {
          console.log(err);
      }
  };
  getSup()
}, []);

const handleFilters = (e) => {
  const value = e.target.value;
  setFilters({
      ...filters,
      [e.target.name]: value,
  });
};

const handleFiltersHang = (e) => {
  const value = e.target.value;
  setFiltersHang({
      ...filtershang,
      [e.target.name]: value,
  });
};

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{title}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Lọc sản phẩm:</FilterText>
            <Select name="title" onChange={handleFilters}>
              <Option disabled selected>Loại</Option>
              {cate.map((item)=>(
                <Option value="title">{item.title}</Option>             
              ))}
            </Select>
          </Filter>
          <Filter>
            <FilterText>Hãng:</FilterText>
            <Select name="title" onChange={handleFiltersHang}>
              <Option disabled selected>Hãng</Option>
              {sup.map((item)=>(
                <Option value="id">{item.title}</Option>             
              ))}
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sắp xếp:</FilterText>
            <Select onChange={e => setSort(e.target.value)}>
              <Option value={"newest"}>Mới nhất</Option>
              <Option value={"asc"}>Giá từ thấp đến cao</Option>
              <Option value={"desc"}>Giá từ cao đến thấp</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Categories/>
        <Products title={title} filters={filters} sort={sort} />
        <CSKH/>
        <Footer/>
    </Container>
  )
}

export default Product
