import styled from 'styled-components';
import { Link,useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";


import React, { useState } from 'react'

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

const Login = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
      });
      const [err, setError] = useState(null);

      const navigate = useNavigate();
    
      const { login } = useContext(AuthContext);

      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(inputs)
          navigate("/");
        } catch (err) {
          setError(err.response.data);
        }
      };
  return (
    <Container>
    <Wrapper>
        <Title>Đăng nhập</Title>
        <Form >
            <Input placeholder="Email" name="email" onChange={handleChange}/>
            <Input type="password" placeholder="Mật khẩu" name="password" onChange={handleChange}/>
            <Button onClick={handleSubmit} >Đăng nhập</Button>
            <Link style={{ textDecorationLine: "none", color: "black" }}>
                <Links>
                    Quên mật khẩu?
                </Links>
            </Link>
            <Link to={"/register"} style={{ textDecorationLine: "none", color: "black" }}>
                <Links>
                    Đăng ký tài khoản mới?
                </Links>
            </Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login
