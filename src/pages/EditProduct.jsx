import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    flex: 6;
`
const Title = styled.h1`
    margin-left: 20em;

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
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    margin-top: 5px;
    display: flex;
    width: 25em;
    margin-left: 50em;
`;
const Option = styled.option`

`
const AddProduct = () => {
    const [product, setProduct]= useState({
        title:"",
        description:"",
        price:"",
        img:"",
        quantity:"",
        cate_id:"",
        sup_id:"",
    });

    //const navigate= useNavigate();
    const [cate,setCate] = useState([]);
    const [sup,setSup] = useState([]);
    const [inputs,setInputs]=useState([]);

    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    
    console.log(location);

    const  handleChange=(e) => {
        setProduct(prev=>({...prev,[e.target.name]: e.target.value}));
    };

    

    const handleClick = async e =>{
        e.preventDefault();
        try {
            await axios.put("http://localhost:8800/api/products/updateproduct/"+productId,product);
            
            window.confirm("Đã sửa thành công")
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/products/"+productId);
                setInputs(res.data[0]);
                //console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        getProducts()
    }, [productId]);
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
        const getSupplier = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/suppliers/getsupplier");
                setSup(res.data);
                //console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        getSupplier()
    }, []);

    return (
    <Container>
        <Title>Thêm sản phẩm</Title>
        <Input type="text" placeholder="Mã sản phẩm" name='id' onChange={handleChange}></Input>
        <Input type="text" placeholder="Tên sản phẩm" name='title' onChange={handleChange} ></Input>
        <Input type="text" placeholder="Mô tả" name='description' onChange={handleChange}/>
        <Input type="text" placeholder="Giá" name='price' onChange={handleChange}/>
        <Input type="text" placeholder="Hình ảnh" name='img' onChange={handleChange}/>
        <Input type="text" placeholder="Số lượng" name='quantity' onChange={handleChange}/>

        <Select type="text" placeholder="Loại" name='cate_id' onChange={handleChange}>
            <Option disabled selected>Loại</Option>
            {cate.map((item)=>(
                <Option value="id">{item.title}</Option>             
            ))}
        </Select>

        <Select name='sup_id' onChange={handleChange}>
            <Option disabled selected>Nhà cung cấp</Option>
            {sup.map((item)=>(
                <Option value="id">{item.title}</Option>             
            ))}
        </Select>
        <Button onClick={handleClick}>Thêm</Button>
    </Container>
      
  )
}

export default AddProduct
