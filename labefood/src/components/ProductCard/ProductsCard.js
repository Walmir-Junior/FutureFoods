import React from "react"
import * as S from './styles'


const ProductsCard = (props) => {
    const { foods, action, txtButton } = props
    return (
        <S.CardProdutoMap >
                    <S.Image src={foods.photoUrl} alt = "imagem" />
                    <S.InfProduto>
                    <S.NameFoods>{foods.name} </S.NameFoods>
                        <S.DescriptionFoods>{foods.description} </S.DescriptionFoods>
                        <S.PriceFoods> R$ {foods.price.toFixed(2)} </S.PriceFoods>
                    </S.InfProduto>
                    <S.ButtonsFood>
                        <p></p>
                        <p></p>
                        <button onClick={action}>{txtButton}</button>
                    </S.ButtonsFood>
            </S.CardProdutoMap>
    )

}

export default ProductsCard