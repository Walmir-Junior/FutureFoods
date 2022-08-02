import styled from 'styled-components';

export const Container = styled.div`
    width:360px;
    height:42px;
    display:flex;
    margin-left:16px;
    padding-right:16px;
    margin-top:8px;
    align-items:center;
    overflow-x:scroll;
     scrollbar-width: none;
     -ms-overflow-style: none; 
     &::-webkit-scrollbar{
          width:0;
          height:0;
     }
`;

export const CategoryItem = styled.button`
    all:unset;  
    height: 18px;
    margin: 0 8px;
    font-family:inherit;
    font-size:16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color:#000;
    cursor:pointer;

    &:focus{
        color:#5cb646;
    }
`;