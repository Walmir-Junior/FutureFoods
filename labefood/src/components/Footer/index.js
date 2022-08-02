import React from "react"
import { Container , Images} from "./styles"
import {useNavigate} from "react-router-dom"
import Avatar from "../../assets/avatar.svg"
import ShoppingCart from "../../assets/ShoppingCart.svg"
import Homepage from "../../assets/homepage.svg"
import { goToCart, goToFeed, goToMyProfile } from "../../routes/Coordinator";


const Footer = () => {
   
    const navigate = useNavigate()

    return (
        <Container>
            <Images src={Homepage} fontSize="large" onClick={() => goToFeed(navigate)}/>
            <Images src={ShoppingCart} fontSize="large" onClick={() => goToCart(navigate)}/>
            <Images src={Avatar} fontSize="large" onClick={() => goToMyProfile(navigate)}/>
        </Container>
    )
}

export default Footer