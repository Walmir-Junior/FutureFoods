import styled from "styled-components"

export const Container = styled.footer`
height: 8vh;
width: 360px;
border-top: 1px solid #dfdfdf;
display: flex;
justify-content: space-around;
align-items: center;
background-color:white;
`
export const Images = styled.img`
background-image: url(${props => props.img});
cursor:pointer;
`