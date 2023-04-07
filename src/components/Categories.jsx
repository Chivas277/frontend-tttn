import styled from "styled-components"
import { useState, useEffect } from 'react';
import CategoryItem from "./CategoryItem";
import axios from 'axios';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between; 
`;

const Categories = () => {

    const [cate, setCate] = useState([]);



    useEffect(() => {
        const getCate = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/categories/getcate"
                );
                setCate(res.data);
                console.log(res);
            } catch (err) {

            }
        };
        getCate()
    }, [])


    return (
        <Container>
            {
                cate.map((item) => {
                    return (
                        <CategoryItem item={item} key={item.id} />
                    )
                })
            }

        </Container>
    )
}

export default Categories