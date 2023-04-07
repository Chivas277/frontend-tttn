import { Link } from "react-router-dom";
import styled from "styled-components"
//import { useEffect } from 'react';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 2vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {


  return (
    <Container>
      <Link to={`http://localhost:8800/api/products/getproductcate/${item.title}`} style={{ textDecorationLine: "none" }} defaultValue="id">
        {item.title}
      </Link>
    </Container>
  )
}

export default CategoryItem