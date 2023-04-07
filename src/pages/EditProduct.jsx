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
    const reducer = (state, action) => {
        switch (action.type) {
          case 'FETCH_REQUEST':
            return { ...state, loading: true };
          case 'FETCH_SUCCESS':
            return { ...state, loading: false };
          case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
          case 'UPDATE_REQUEST':
            return { ...state, loadingUpdate: true };
          case 'UPDATE_SUCCESS':
            return { ...state, loadingUpdate: false };
          case 'UPDATE_FAIL':
            return { ...state, loadingUpdate: false };
          case 'UPLOAD_REQUEST':
            return { ...state, loadingUpload: true, errorUpload: '' };
          case 'UPLOAD_SUCCESS':
            return {
              ...state,
              loadingUpload: false,
              errorUpload: '',
            };
          case 'UPLOAD_FAIL':
            return { ...state, loadingUpload: false, errorUpload: action.payload };
      
          default:
            return state;
        }
      };
    // const [product, setProduct]= useState({
    //     title:title,
    //     description:desc,
    //     price:price,
    //     img:image,
    //     quantity:quantity,
    //     cate_id:category,
    //     sup_id:suplier,
    // });

    //const navigate= useNavigate();
    const [cate,setCate] = useState([]);
    const [sup,setSup] = useState([]);
    const [inputs,setInputs]=useState([]);

    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    
    console.log(inputs);

    // const  handleChange=(e) => {
    //     setProduct(prev=>({...prev,[e.target.name]: e.target.value}));
    // };

    

    const handleClick = async e =>{
        e.preventDefault();
        try {
            await axios.put("http://localhost:8800/api/products/updateproduct/"+productId,
            {
            title:title,
            description:desc,
            price:price,
            img:image,
            quantity:quantity,
            cate_id:category,
            sup_id:suplier,
            });
            
            window.confirm("Đã sửa thành công")
        } catch (err) {
            console.log(err);
        }
    }

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [quantity, setQuantity] = useState([]);
    const [category, setCategory] = useState('');
    const [suplier, setSuplier] = useState('');

    useEffect(() => {
        // const getProducts = async () => {
        //     try {
        //         const res = await axios.get("http://localhost:8800/api/products/"+productId);
        //         setInputs(res.data[0]);
        //         //console.log(res);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // };
        // getProducts()
        const fetchData = async ()=>{
            try {
                const {data} =await axios.get("http://localhost:8800/api/products/"+productId);
                setTitle(data.title);
                setDesc(data.desc);
                setPrice(data.price);
                setImage(data.img);
                setQuantity(data.quantity);
                setCategory(data.cate_id);
                setSuplier(data.sup_id);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
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
        <Title>Sửa sản phẩm</Title>
        <Input type="text" placeholder="Tên sản phẩm" name='title' onChange={(e)=> setTitle(e.target.value)} value={title}/>
        <Input type="text" placeholder="Mô tả" name='description' onChange={(e)=> setDesc(e.target.value)} value={desc}/>
        <Input type="text" placeholder="Giá" name='price' onChange={(e)=> setPrice(e.target.value)}value={price}/>
        <Input type="text" placeholder="Hình ảnh" name='img' onChange={(e)=> setImage(e.target.value)} value={image}/>
        <Input type="text" placeholder="Số lượng" name='quantity' onChange={(e)=> setQuantity(e.target.value)} value={quantity}/>

        <Select type="text" placeholder="Loại" name='cate_id' onChange={(e)=> setCategory(e.target.value)} value={category}>
            <Option disabled selected>Loại</Option>
            {cate.map((item)=>(
                <Option value="id">{item.title}</Option>             
            ))}
        </Select>

        <Select name='sup_id' onChange={(e)=> setSuplier(e.target.value)} value={suplier}>
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
