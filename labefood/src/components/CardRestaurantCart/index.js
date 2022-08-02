import React from "react";
import {Container, Name, Address, Time} from './styles';


const CardRestaurant=(props)=>{
    const {name, address, deliveryTime} = props
        
  return (
   <Container>
        <Name>{name}</Name>
        <Address>{address}</Address>
        <Time>{deliveryTime} - min</Time>
   </Container>
  );
}

export default CardRestaurant;