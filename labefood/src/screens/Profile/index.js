import React, { useEffect, useState } from "react";
import { Container, Header, PersonalData, AddressData, PencilEdit, DataPersonal, AddressPersonal, OrdersHistory } from './styles'
import axios from "axios";
import { URL_BASE } from "../../constants/URL_BASE";
import Footer from "../../components/Footer/index"
import EditPencil from "../../assets/edit.svg"
import { useNavigate } from "react-router-dom";
import { goToProfileEdit, goToAddressEdit } from "../../routes/Coordinator";



const Profile = () => {
  const navigate = useNavigate()
  const [detailsprofile, setDetailsProfile] = useState([])
  const [history, setHistory] = useState([])

  const getProfile = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    axios
      .get(`${URL_BASE}/profile`, headers)
      .then((resp) => { setDetailsProfile(resp.data.user) })
      .catch((error) => console.log(error))
  }

  const getHistory = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    axios
      .get(`${URL_BASE}/orders/history`, headers)
      .then((resp) => { setHistory(resp.data.orders) })
      .catch((error) => console.log(error))
  }



  useEffect(() => {
    getProfile()
  }, [])

  useEffect(() => {
    getHistory()
  }, [])


  const historyList = history && history.map((list) => {
    return (
      <div key={list.createdAt}>
        <p>{list.restaurantName}</p>
        <p>{list.totalPrice}</p>
      </div>
    )
  })

  console.log(historyList)
  return (
    <div>
      <Header>
        <h3>Meu Perfil</h3>
      </Header>
      <Container>
        <DataPersonal>
          <PersonalData>
            <p>{detailsprofile.name}</p>
            <p>{detailsprofile.email}</p>
            <p>{detailsprofile.cpf}</p>
          </PersonalData>
          <PencilEdit src={EditPencil} onClick={() => goToProfileEdit(navigate)} />
        </DataPersonal>
        <AddressPersonal>
          <AddressData>
            <h5>Enderço cadastrado</h5>
            <p>{detailsprofile.address}</p>
          </AddressData>
          <PencilEdit src={EditPencil} onClick={() => goToAddressEdit(navigate)} />
        </AddressPersonal>
        <OrdersHistory>
          <h5>Histórico de pedidos</h5>
          {historyList.length === 0 ? <p>sem pedidos</p> : historyList}
        </OrdersHistory>
      </Container>
      <Footer />
    </div>
  );
}

export default Profile;