import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from "styled-components"

const Container = styled.div`
    height: 30em;
    width: 100%;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 30em;

`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`;

const CSKH = () => {
    return (
        <Container>
            <Title>Chăm sóc khách hàng</Title>
            <Desc>Nhận thông tin về các sản phẩm yêu thích của bạn</Desc>
            <InputContainer>
                <Input placeholder="Nhập địa chỉ email"/>
                <Button>
                    <SendOutlinedIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default CSKH