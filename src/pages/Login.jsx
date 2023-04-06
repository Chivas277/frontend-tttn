import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { publicRequest } from '../requestMethod';
import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;    
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;   
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color:green;
        cursor: not-allowed;
    }
`;

const Links = styled.a`
    margin: 10px 0px;
    font-size: 14px;
    //text-decoration: underline;
    cursor: pointer;
    
`;

const Error = styled.p`
    color: red;
`

const Login = () => {
    const [err, setError] = useState(null);

    const [inputs,setInputs]=useState({
        email:"",
        password:"",
    })
    const navigate = useNavigate();
    const {login}=useContext(AuthContext);

    const handleChange = e => {
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleSubmit= async e=>{
        e.preventDefault();
        try{
            await login(inputs)
            navigate("/productlist");
           //console.log(res);
        }catch(err){
            setError(err.response.data);
            console.log(err);
        }
    }

  return (
    <Container>
    <Wrapper>
        <Title>Đăng nhập</Title>
        <Form >
            <Input required placeholder="Email" name="email" onChange={handleChange}/>
            <Input required type="password" placeholder="Mật khẩu" name="password" onChange={handleChange}/>
            <Button onClick={handleSubmit}>Đăng nhập</Button>
            {
                err && <Error>{err}</Error>
            }
            <Link to={"/register"} style={{ textDecorationLine: "none", color: "black" }}>
                <Links>
                    Chưa có tài khoản?
                </Links>
            </Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login
