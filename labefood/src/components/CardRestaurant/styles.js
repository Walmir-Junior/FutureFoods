import styled from 'styled-components';

export const Container = styled.div`
    width:360px;
    height:196px;
    margin:0;
    padding: 8px 16px 0;
    cursor:pointer;

    img{
        width: 328px;
        height: 120px;
        margin: 0 ;
        max-width:100%;
        object-fit: contain;
    }
    
`;
export const InsideCard = styled.div`
    width:328px;
    height:188px;
    border: 1px solid #b8b8b8;
    border-radius:8px;
`;
export const Infos = styled.div`
    width:100%;
    height:68px;
    display:flex;
    flex-direction:column;
    padding:12px 16px;
    gap:4px;

    h2{
        width:100%;
        font-size:16px;
        letter-spacing: -0.39px;
        color:#5cb646;
        font-weight:normal;

    }
`;
export const Delivery = styled.div`
    width:100%;
    height:18px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    span{
        font-size:16px;
        color: #b8b8b8;
        letter-spacing: -0.39px;
    }
`;