
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

import { Link, useNavigate } from "react-router-dom";




const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;  
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;

`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

// const ProductColor = styled.div`
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;    
//     background-color: ${props => props.color};

// `;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;  
  margin-top: 10px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600; 
    cursor: pointer;
`;


const Cart = () => {

    // const cart = useSelector((state) => state.cart);
    // const [stripeToken, setStripeToken] = useState(null);
    // const navigate = useNavigate();
    // const [quantity, setQuantity] = useState(1);

    // const onToken = (token) => {
    //     setStripeToken(token);
    // };

    // useEffect(() => {
    //     const makeRequest = async () => {
    //         try {
    //             const res = await userRequest.post("/checkout/payment", {
    //                 tokenId: stripeToken.id,
    //                 amount: cart.total * 100,
    //             });
    //             navigate.push("/success", {
    //                 stripeData: res.data,
    //                 products: cart,
    //             });
    //         } catch { }
    //     };
    //     stripeToken && makeRequest();
    // }, [stripeToken, cart.total, navigate, cart]);
    //console.log(stripeToken);


    // const handleQuantity = (type) => {
    //     if (type === "dec") {
    //         quantity > 1 && setQuantity(quantity - 1);
    //     } else {
    //         setQuantity(quantity + 1);
    //     }
    // }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Giỏ hàng của bạn</Title>
                <Top>
                    <Link to={"/productlist"}>
                        <TopButton>Tiếp tục mua sắm</TopButton>
                    </Link>
                    
                        <TopButton type="filled">Thanh toán ngay</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        
                            <Product>
                                <ProductDetail>
                                    <Image  />
                                    <Details>
                                        <ProductName><b>Tên sản phẩm:</b> </ProductName>
                                        {/* <ProductID><b>Mã:</b>123</ProductID> 
                                        <ProductColor color={product.color} />*/}
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <ProductAmount></ProductAmount>
                                    </ProductAmountContainer>
                                    <ProductPrice> VNĐ</ProductPrice>
                                </PriceDetail>
                            </Product>
                       
                        <Hr />

                    </Info>
                    <Summary>
                        <SummaryTitle>Chi tiết hoá đơn</SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>Tổng tiền: </SummaryItemText>
                            <SummaryItemPrice> VNĐ</SummaryItemPrice>
                        </SummaryItem>

                        {/* <SummaryItem>
                            <SummaryItemText>Giảm: </SummaryItemText>
                            <SummaryItemPrice>$30</SummaryItemPrice>
                        </SummaryItem> */}
                        <SummaryItem type="total">
                            <SummaryItemText >Cần thanh toán: </SummaryItemText>
                            <SummaryItemPrice>VNĐ</SummaryItemPrice>
                        </SummaryItem>

                            <Button>Thanh toán ngay</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart