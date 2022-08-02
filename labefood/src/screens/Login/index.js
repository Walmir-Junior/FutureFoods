import React from "react";
import { Container, Text, FormLogin } from './styles'
import { useState } from 'react'
import axios from "axios";
import useForm from '../../hooks/useForm';
import { goToAddressEdit, goToFeed, goToSignUp } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from '@mui/material';
import LoginImg from '../../assets/Login.png'

const Login = () => {
  // const [login, setLogin] = useState("");
  // const [password, setPassword] = useState("");
  const [ form, onChange, cleanFields] = useForm({email:"", password:""})
  const [labelUser,setlabelUser] = useState('Email')
  const [labelPassword,setlabelPassword] = useState('Senha')
  const [error,setError] = useState(false)
  const navigate = useNavigate()

  const getLogin = (event) => {
    event.preventDefault()

    axios
      .post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login', form)
      .then((res) => {
        alert("Sucesso")
        console.log(res.data.user)
        if (res.data.user.hasAddress === true) {
          goToFeed(navigate)
        } else {
          goToAddressEdit(navigate)
        }
        // setHasAdress(res.data.user.hasAdress)
        localStorage.setItem("token", res.data.token)
        console.log(res.data.token)


      })
      .catch((err) => {
        // alert("Usuário não cadastrado.")
        setError(true)
        cleanFields()
        const erro = err.response.data.message
        setlabelPassword(erro)
        setlabelUser(erro)
      })
  }

  return (
    <Container>
      <img src={LoginImg} alt="FutureEats imagem"/>
      <Text>Entrar</Text>
      <FormLogin onSubmit={getLogin}>
        <TextField
          value={form.email}
          onChange={onChange}
          name="email"
          required
          helperText=" "
          fullWidth
          // label="Email"
          label={labelUser}
          placeholder="Email"
          error={error}
          variante="filled"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          color= "success"
        />
        <TextField
          value={form.password}
          onChange={onChange}
          name="password"
          required
          helperText=" "
          fullWidth
          // label="Senha"
          label={labelPassword}
          placeholder="Senha"
          error={error}
          variante="filled"
          type="password"
          color= "success"
        />
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="success"
          fullWidth
        >Entrar
        </Button>
      </FormLogin>
      <a onClick={() => goToSignUp(navigate)}>Não possui cadastro? Clique aqui.</a>
    </Container>
  );
}

export default Login;