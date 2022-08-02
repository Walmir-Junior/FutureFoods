import styled from 'styled-components';

export const Container = styled.div`
box-sizing: border-box;
width: 360px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 20px;
img{
  width: 104px;
  height: 58px;
  margin: 24px 128px 16px;
  object-fit: contain;
}
`
export const FormSignUp = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
box-sizing: border-box;
margin: 0 15px;
width: 330px;
gap: 20px;
input {
    font-size: 20px;
}
`
export const Text = styled.p`
  width: 296px;
  height: 18px;
  font-size: 16px;
  margin-bottom: 15px;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000;
`