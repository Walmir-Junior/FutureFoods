import styled from 'styled-components';

export const ContainerMaster = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 16px
`

export const Header = styled.div`
height: 10vh;
width: 100%;
display: flex;
border-bottom: 1px solid #dfdfdf;
align-items: center;
`
export const ButtonBack = styled.button`
border: none;
background-color: transparent;
`

export const Tittle = styled.h2`
text-justify: auto;
position: relative;
padding-left: 110px;
font-weight: lighter;
`
export const Form = styled.form`
width: 95%;
`