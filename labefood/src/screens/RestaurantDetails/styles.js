import styled from 'styled-components';
 
export const Container = styled.div`
    
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`;
 
export const Image = styled.img `
    width: 96px;
    height: 111px;
    border-radius:8px 0px 0px 8px;
`

export const CardProdutos = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    

`

export const CardProdutoMap = styled.div `
    width: 96%;
    height: 112px;
    display: flex;
    justify-content: space-between;
    border: solid 1px #d3d3d3;
    margin: 8px;
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
export const ButtonGreen = styled.button`
    width: 80px;
    height: 31px;
    text-align: center;
    border-radius: 8px;
    border: solid 1px #5cb646;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    background: none;
    color: #5cb646;
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
export const TitleCategory = styled.div`
    display: flex;
    font-size: 16px;
    text-align: left;
    margin: 16px 16px 8px;
    width:100%;
 
`