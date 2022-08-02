import React from "react"
import * as S from './styles'

const CardRestaurantDetails=(props) =>{

    const {name, category,deliveryTime,address,shipping,logoUrl} = props

return (

    <>

    <S.ContainerRest>
        
        <S.ImgLogoRest src= {logoUrl} /> 
     
        <S.NameRest>
            {name}
        </S.NameRest>

        <S.NameCategory>
            {category}
        </S.NameCategory>

        <S.Time> 
            {deliveryTime} min 
            R$ {shipping.toFixed(2)}
        </S.Time>

        <S.NameAddress>
            {address}
        </S.NameAddress>
            
    </S.ContainerRest>

    </>
   
)

}

export default CardRestaurantDetails;