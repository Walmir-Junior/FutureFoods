import React, { useState } from "react";
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Container, FormSignUp, Text } from './styles';
import { goToAddressEdit } from "../../routes/Coordinator";
import Logo from "../../assets/Login.png"

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const login = (event) => {
    
    event.preventDefault()

    const body = {
      name: name,
      email: email,
      cpf: cpf,
      password: password
    }

    axios
    .post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup', body)
    .then(() => {
      alert('usuário criado com sucesso')
      goToAddressEdit(navigate)
    })
    .catch(() => {
      alert('Erro na criação do usuário')
    })
  }
  

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangeCpf = (event) => {
    setCpf(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const onChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }
  console.log(name, email, cpf, password)
  return (
    <Container>
      <img src={Logo} alt="Logo FutureEats"/>
      <Text>Cadastrar</Text>
      <FormSignUp onSubmit={login} >
        <TextField
          value={name}
          onChange={onChangeName}
          required
          fullWidth="fullWidth"
          label="Nome"
          placeholder="Nome e sobrenome"
          variante="filled"
          type="text"
          color= "success"
        />
        <TextField
        value={email}
        onChange={onChangeEmail}
        required
        fullWidth="fullWidth"
        label="Email"
        placeholder="Email"
        variante="filled"
        type="email"
        color= "success"
      />
         <TextField
        value={cpf}
        onChange={onChangeCpf}
        required
        fullWidth="fullWidth"
        label="CPF"
        placeholder="CPF"
        variante="filled"
        pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
      />
      <TextField
        value={password}
        onChange={onChangePassword}
        required
        fullWidth="fullWidth"
        label="Senha"
        placeholder="Senha"
        variante="filled"
        type="password"
      />
        <TextField
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
        required
        fullWidth="fullWidth"
        label="Confirme a senha"
        placeholder="Confirme a senha"
        variante="filled"
        type="password"
      />
        <Button
          type="submit"
          fullWidth label="fullWidth"
          size="large"
          variant="contained"
          color="success"
          >Criar
      </Button>
      </FormSignUp>
    </Container>
  );
}

export default SignUp;