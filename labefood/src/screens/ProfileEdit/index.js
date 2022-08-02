import React, { useState } from "react";
import { Container, Header, Tittle, ButtonBack, Form , ContainerMaster} from './styles'
import { TextField, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from "axios"
import { goBack } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";


const ProfileEdit = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")

  const rename = (event) => {
    event.preventDefault()

    const headers = {
      headers: {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikl4TGtBUllHdGg0bHg1WENSTWg3IiwibmFtZSI6Im1heGltaWxpYW5vIiwiZW1haWwiOiJtYXhpQGdtYWlsLmNvbSIsImNwZiI6IjEyMy40NTYuNzg5LTg5IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY1ODQxNzcxMn0.wJheprVGsaeeoOp0pSF8pBkx_nhUV6lC1Wjk8bC5gls"
      }
    }

    const body = {
      name: name,
      email: email,
      cpf: cpf
    }

    axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile", body, headers)
      .then((resp) => alert("Usuário alterado com sucesso!"))
      .catch((error) => alert(error.message))
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

  return (
    <ContainerMaster>
      <Container>
        <Header>
          <ButtonBack><ArrowBackIosNewIcon onClick={()=> goBack(navigate)}/></ButtonBack>
          <Tittle>Editar</Tittle>
        </Header>
        <Form onSubmit={rename}>
          <TextField
            helperText=" "
            value={name}
            onChange={onChangeName}
            required
            fullWidth="fullWidth"
            label="Nome"
            placeholder="Nome e sobrenome"
            variante="filled"
            color="success"
          />
          <TextField
            helperText=" "
            type="email"
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={onChangeEmail}
            fullWidth="fullWidth"
            label="E-mail"
            placeholder="email@email.com"
            variante="filled"
            color="success"
            title="coloque o email certo"
          />
          <TextField 
            helperText=" "
            value={cpf}
            onChange={onChangeCpf}
            required
            fullWidth="fullWidth"
            label="CPF"
            placeholder="000.000.000.00"
            variante="filled"
            color="success"
            inputProps={{ inputMode: 'numeric', pattern: '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})'}}
          />
          <Button
            type="submit"
            fullWidth label="fullWidth"
            size="large"
            variant="contained"
            color="success"
          >Salvar
          </Button>
        </Form>      
      </Container>
    </ContainerMaster> 
  );
}

export default ProfileEdit;