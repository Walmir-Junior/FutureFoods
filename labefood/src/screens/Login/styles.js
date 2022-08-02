import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;

    img{
        width: 104px;
        height: 58px;
        margin: 68px 128px 16px;
        object-fit: contain; 
    }

`;
export const Text = styled.p`
        width: 360px;
        height: 42px;
        margin: 16px 0 0;
        padding: 12px 32px;
        text-align: center;
`
export const FormLogin = styled.form`
margin: 0 15px 25px;
`