import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
    flex: 6;
`
const Title = styled.h1`
    margin-left: 20em;

`

const Center = styled.div`
    height: 32em;
`
const Input = styled.input`
    display: flex;
    width: 30em;
    margin-top: 5px;
    margin-left: 50em;
    height: 5em;
`
const Button = styled.button`
    margin-left: 50em;
    margin-top: 1em;
`

const AddCate = () => {
    const [cate, setCate]= useState({
        id:"",
        title:"",
    });

    const navigate= useNavigate();

    const  handleChange=(e) => {
        setCate(prev=>({...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        e.preventDefault();
        try {
           const res= await axios.post("http://localhost:8800/api/categories/addcate",cate);
            //navigate("/");
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }



    return (
    <Container>
        <Navbar/>
        <Title>Thêm danh mục sản phẩm</Title>
        <Center>
            <Input type="text" placeholder="Mã loại" name='id' onChange={handleChange}/>
            <Input type="text" placeholder="Tên loại" name='title' onChange={handleChange} />
            <Button onClick={handleClick}>Thêm</Button>
        </Center>
        <Footer/>
    </Container>
      
  )
}

export default AddCate
