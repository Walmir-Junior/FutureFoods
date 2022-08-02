import React from "react";
import {Container} from './styles'
import HomeImg from '../../assets/Home.png'
import { goToLogin } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

const HomePage=()=>{
  const navigate = useNavigate()
  const getNextProfile = () => {
    setTimeout(() => {goToLogin(navigate)}, 5000)
  }
  return (
   <Container>
    <img src={HomeImg}/>
    {getNextProfile()}
   </Container>
  );
}

export default HomePage;