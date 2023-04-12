import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {toast} from "react-toastify"

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Container = styled.div`
    display: flex;
    width: 100%;        
`

const ListContainer = styled.div`
    flex: 6;
`

const Datatable = styled.div`
    height: 600px;
    padding: 20px;
`

const DatatableTitle = styled.div`
    width: 100%;
    font-size: 24px;
    color: gray;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Links = styled.div`
    text-decoration: none;
    color: green;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid green;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    
`

const ProductList = styled.div`
    flex: 4;
`

const ProductListItem = styled.div`
    display: flex;
    align-items: center;  
`

const ProductListImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const ProductListEdit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`

const CateScreen = () => {

    const [cate,setCate]=useState([]);
    
    useEffect(() => {
        const getCate = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/categories/getcate")
                setCate(res.data);
                //console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        getCate();
    }, []);

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/api/categories/deletecate/" +id)
            toast.success('Đã xóa thành công');
            //window.confirm('Đã xóa thành công')
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }

    const columns = [
        { field: "id", headerName: "ID", width: 220 },
        {
            field: "title",
            headerName: "Tên danh mục",
            width: 250,
            
        },
        {
            field: "action",
            headerName: "Hành động",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/products/` + params.row.id}>
                            <ProductListEdit >Sửa</ProductListEdit>
                        </Link>
                        <DeleteOutlineOutlinedIcon style={{
                            color: "red",
                            cursor: "pointer"
                        }}
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];
  return (
    <Container >
            <ListContainer>
                <Navbar />
                <Datatable>
                    <DatatableTitle>
                        Quản lý danh mục
                        <Link to="/addcate" style={{ textDecoration: "none" }}>
                            <Links>
                                Thêm
                            </Links>
                        </Link>
                    </DatatableTitle>
                    <ProductList>
                        <DataGrid
                            rows={cate}
                            disableSelectionOnClick
                            columns={columns}
                            getRowId={(row) => row.id}
                            pageSize={8}
                            rowsPerPageOptions={[9]}
                            checkboxSelection
                            autoHeight
                        />
                    </ProductList>
                </Datatable>
            </ListContainer>
        </Container>
  )
}

export default CateScreen
