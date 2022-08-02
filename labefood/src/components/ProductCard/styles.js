import styled from 'styled-components';
  
export const Image = styled.img `
    width: 40%;
    border-radius:8px 0px 0px 8px;
    object-fit: contain;
`

export const CardProdutos = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    

`

export const CardProdutoMap = styled.div `
    width: 95%;
    height: 112px;
    display: flex;
    justify-content: space-between;
    border: solid 1px #d3d3d3;
    margin: 10px;
    border-radius:8px
    
`
  

export const InfProduto = styled.div`

    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    margin-left: 5px;

`

export const ButtonsFood = styled.div`

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    

`

export const Line = styled.div`
    border-top: 1px solid #000;
    width: 328px;
    
`

export const NameFoods = styled.div`
    color: #5cb646;
    font-size: 16px;
`

export const DescriptionFoods = styled.div`
    color: #b8b8b8;
    font-size: 12px;
`

export const PriceFoods = styled.div`
    color: black;
    font-size: 16px;
`