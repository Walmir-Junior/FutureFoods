import styled from 'styled-components';

export const Container = styled.div`
 height:518px;
`;

export const Header = styled.div`
    height:64px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dfdfdf;
    justify-content: center;

    h3{   
        font-weight: lighter ;
    }
`;
export const DataPersonal = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem;
font-size: 16px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const PersonalData = styled.div`
display: flex;
align-items: start;
flex-direction: column;
line-height: 1.5rem;
`
export const AddressPersonal = styled.div`
width: 360px;
display: flex;
padding: 1rem;
background-color: #eeeeee;
font-size: 16px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

h5{
    font-size: 16px;
    color: #b8b8b8;
    font-weight: lighter;
}
`
export const AddressData = styled.div`
`
export const PencilEdit = styled.img`
background-image: url(${props => props.img});
`
export const OrdersHistory = styled.div`

h5{
  font-size: 16px;
  border-bottom: 1px solid black;
  margin: 1rem;
  line-height: 2rem;
}
`