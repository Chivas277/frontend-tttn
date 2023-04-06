//import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import { mobile } from '../Responsive';

import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from 'axios';
import { toast } from 'react-toastify';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rebeccapurple(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    //border-radius: 50%;
    //background-color: coral;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const ID = styled.div`
    width: 15em;
`
const Price = styled.div`
    margin-top: 1em ;
`

const Button = styled.div`
    background-color:white ;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;  
    display: flex;
    align-items: center;
    justify-content: center;  
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`;

const handleDelete = async (id)=>{
    try{
        await axios.delete("http://localhost:8800/api/products/delproduct/" +id)
        //toast.success('Đã xóa thành công');
        window.confirm('Đã xóa thành công')
        window.location.reload();
    }catch(err){
        console.log(err);
    }
}
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <ID>{item.title}
                <Price>{formatCash(item.price.toString())}</Price>
            </ID>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <Button onClick={()=>handleDelete(item.id)}>
                        <DeleteOutlineOutlinedIcon />
                    </Button>
                </Icon>
                <Icon>
                    <Link to={`/editproduct/${item.id}`} style={{ textDecorationLine: "none" }}>
                        <UpgradeIcon />
                    </Link>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product