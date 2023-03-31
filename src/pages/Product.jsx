
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import styled from 'styled-components';
import Announcement from './../components/Announcement';
import Footer from './../components/Footer';
import Navbar from './../components/Navbar';
import { useLocation } from "react-router-dom";
import { useState,useEffect } from 'react';
import axios from 'axios';
//import { publicRequest } from '../requestMethod';
//import { addProduct } from '../redux/cartRedux';
//import { useDispatch } from 'react-redux';
//import CSKH from './../components/CSKH';
//import { mobile } from '../Responsive';



const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%; 
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px; 
`;

// const FilerContainer = styled.div`
//     width: 50%;
//     margin: 30px 0px;
//     display: flex;
//     justify-content: space-between;
//     ${mobile({ width: "100%" })}
// `;

// const Filter = styled.div`
//     display: flex;
//     align-items: center;
// `;

// const FilterTitle = styled.span`
//     font-size: 20px;
//     font-weight: 200;
// `;

// const FilterColor = styled.div`
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background-color: ${props => props.color};
//     margin: 0px 5px;
//     cursor: pointer;
// `;

// const FilterSize = styled.select`
//     margin-left: 10px;
//     padding: 5px;
// `;

// const FilterSizeOption = styled.option`

// `;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span` 
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;


const Product = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product, setProducts] = useState({});
    const [quantity, setQuantity] = useState(1);

    // const [color, setColor] = useState("");
    // const [size, setSize] = useState("");

    //const dispatch = useDispatch();

    // useEffect(() => {
    //     const getProduct = async () => {
    //         try {
    //             const res = await publicRequest.get("/product/find/" + id)
    //             setProduct(res.data);
    //         } catch {

    //         }
    //     };
    //     getProduct()
    // }, [id]);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/products/getproductid");
                setProducts(res.data);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        getAllProducts()
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    // const handleClick = () => {
    //     //update cart
    //     dispatch(
    //         addProduct({ ...product, quantity })
    //     )
    // };

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price} VNĐ</Price>

                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <AddIcon onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button >Thêm vô giỏ hàng</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Product