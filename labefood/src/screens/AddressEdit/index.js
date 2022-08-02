import React from "react";
import { Container, Header, ButtonBack, Tittle, Form } from './styles'
import { TextField, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { URL_BASE } from "../../constants/URL_BASE";
import { goBack, goToFeed } from "../../routes/Coordinator";

const AddressEdit = () => {
  const navigate = useNavigate()
  const [form, onChange, cleanFields] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })

  const putAddress = (event) => {
    event.preventDefault()
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        auth: token
      }
    }
    axios
      .put(`${URL_BASE}/address`, form, headers)
      .then((res) => {
        alert("endereço cadastrado")
        localStorage.setItem("token", res.data.token)
        goToFeed(navigate)
      })
      .catch((err) => {
        alert("erro")
        cleanFields()
      })
  }

  return (
    <Container>
      <Header>
        <ArrowBackIosNewIcon onClick={() => goBack(navigate)}/>
        <Tittle>Endereço</Tittle>
        <div> </div>
      </Header>
      <Form onSubmit={putAddress} >
        <TextField
          helperText=" "
          value={form.street}
          onChange={onChange}
          name="street"
          required
          label="Logradouro"
          placeholder="Rua"
          variante="filled"
          color="success"
        />
        <TextField
          helperText=" "
          value={form.number}
          onChange={onChange}
          name="number"
          type="number"
          required
          label="Número"
          placeholder="72"
          variante="filled"
          color="success"
        />
        <TextField
       // fullWidth = "fullWidth"
          helperText=" "
          value={form.complement}
          onChange={onChange}
          name="complement"
          required
          label="Complemento"
          placeholder="Apto./Bloco"
          variante="filled"
          color="success"
        />
        <TextField
        //fullWidth = "fullWidth"
          helperText=" "
          value={form.neighbourhood}
          onChange={onChange}
          name="neighbourhood"
          required
          label="Bairro"
          placeholder="Bairro"
          variante="filled"
          color="success"
        />
        <TextField
        //fullWidth = "fullWidth"
          helperText=" "
          value={form.city}
          onChange={onChange}
          name="city"
          required
          label="Cidade"
          placeholder="Cidade"
          variante="filled"
          color="success"
        />
        <TextField
        //fullWidth = "fullWidth"
          helperText=" "
          value={form.state}
          onChange={onChange}
          name="state"
          required
          label="Cidade"
          placeholder="Cidade"
          variante="filled"
          color="success"
        />
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="success"
        >Salvar
        </Button>
      </Form>
    </Container>
  );
}

export default AddressEdit;
