import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Product from './Product.jsx';
import axios from 'axios';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ title, filters, sort }) => {

    //console.log(cat,filters,sort);

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    //const [data, setData] = useState([]);

    // useEffect(() => {
    //     const getProducts = async () => {
    //         try {
    //             const res = await publicRequest.get(
    //                 title
    //                     ? `/product?category=${title}`
    //                     : "/product"
    //             );
    //             setProducts(res.data);
    //             console.log(res);
    //         } catch (err) {

    //         }
    //     };
    //     getProducts()
    // }, [title])

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/products/getproductcate/${item.title}`)
                setProducts(res.data);
                //console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        getAllProducts()
    }, [title]);

  


    return (
        <Container>
            {products
                    .slice(0, 8)
                    .map((item) =>
                        <Product item={item} key={item.id} />
                    )}
        </Container>
    )
}

export default Products