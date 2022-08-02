import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`;

export const RestaurantsList = styled.div`
   width:100%;
   height:463px;

   overflow-y:scroll;
   overflow-x:hidden;
     scrollbar-width: none;
     -ms-overflow-style: none; 
     &::-webkit-scrollbar{
          width:0;
          height:0;
     }
`;

export const Header = styled.div`
    width:100%;
    height:64px;
    display:flex;
    justify-content:center;
    align-items:center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-bottom: solid 0.5px rgba(0,0,0,0.25);
    margin-bottom: 8px;

    h1{
    all:unset;    
    width: 74px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    }
`;

export const SearchArea = styled.div`
   width:360px;
    padding:0 16px;
`;

export const ContainerCategories = styled.div`
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
    visibility:${(props)=>props.visibility};

    &:focus{
        color:#5cb646;
    }
`;