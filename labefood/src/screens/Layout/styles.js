import styled from 'styled-components';

export const Container = styled.div`
    width:360px;
    height:640px;
    max-width:100vh;
    border: 1px solid #dfdfdf;
    
    overflow-y:scroll;
     scrollbar-width: none;
     -ms-overflow-style: none; 
     &::-webkit-scrollbar{
          width:0;
          height:0;
     }
`