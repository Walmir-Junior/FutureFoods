import React from "react";
import {Container,Infos, Delivery,InsideCard} from './styles';
import img from './image.png'

const CardRestaurant=({photo,name,deliveryTime,shipping,onClickCard})=>{

        
  return (
   <Container onClick={onClickCard}>
        <InsideCard>
            <img src={photo} alt="Restaurant profile"/>
            <Infos>
                <h2>{name}</h2>
                <Delivery>
                    <span>{deliveryTime} min</span>
                    <span>Frete R${shipping},00</span>
                </Delivery>
            </Infos>
        </InsideCard>
   </Container>
  );
}

export default CardRestaurant;