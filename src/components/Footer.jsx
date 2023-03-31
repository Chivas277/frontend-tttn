import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from "styled-components"
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    margin-top: auto;
    width: 100%;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    //display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-content: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Đồ án chuyên ngành</Logo>
                <Desc>Tỉa Hứa Hoàng Vũ</Desc>

                <SocialContainer>
                    <a href="https://www.facebook.com/Chivas2707">
                        <SocialIcon color="3B5999">
                            <FacebookIcon />
                        </SocialIcon>
                    </a>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <a href="https://github.com/Chivas277/flower-garden">
                        <SocialIcon color="000000">
                            <GitHubIcon />
                        </SocialIcon>
                    </a>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Liên kết hữu ích</Title>
                <List>
                    <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                        <ListItem>Trang chủ</ListItem>
                    </Link>
                    <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
                        <ListItem>Giỏ hàng</ListItem>
                    </Link>
                    <Link to={"/products"} style={{ textDecoration: "none", color: "black" }}>
                        <ListItem>Asus</ListItem>
                        <ListItem>Aorus</ListItem>
                    </Link>
                </List>
            </Center>
            <Right>
                <Title>Liên hệ</Title>
                <ContactItem><LocationOnIcon style={{ marginRight: "10px" }} />180 Cao Lỗ, F4, Q8</ContactItem>
                <ContactItem><PhoneIcon style={{ marginRight: "10px" }} />0707697593</ContactItem>
                <ContactItem><MailOutlineOutlinedIcon style={{ marginRight: "10px" }} />DH51902793@stuent.stu.edu.vn</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png/" />
            </Right>
        </Container>
    )
}

export default Footer
