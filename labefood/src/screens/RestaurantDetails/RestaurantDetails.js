import React, {useEffect, useState, useContext} from "react";
import axios from "axios"
import * as S from './styles'
import CardRestaurantDetails from "../../components/CardRestaurantDetails";
import {useParams} from "react-router-dom"
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";
import Footer from "../../components/Footer";
import ProductsCard from "../../components/ProductCard/ProductsCard";


const RestaurantDetails = () => {
    const {id} = useParams()
    const {addProduct, cart} = useContext(GlobalStateContext)
    const [restaurantDetails,setRestaurantDetails] = useState ()
   const {restaurant, setRestaurant} = useContext(GlobalStateContext)

    
    
    useEffect (()=>{
        getDetailsFood();
    },[])

    const getDetailsFood = () => {
        const headers = {
            headers: {auth:localStorage.getItem("token")}
        }

        axios
        .get (`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${id}`,headers)
        .then ((res)=> {
        setRestaurantDetails(res.data.restaurant.products)
        setRestaurant (res.data.restaurant)
        // console.log (res.data)
    })
        .catch ((err)=>{console.log("Erro na requisição de detalhes")})

    }
 
    // console.log("Carinho",restaurantDetails)


     const renderPrincipais = restaurantDetails && restaurantDetails.map((foods)=> {
        if (foods.category !== "Bebida" &&  foods.category !== "Acompanhamento" ) {
            return <ProductsCard foods={foods} key={foods.id} action={() =>addProduct(foods)} txtButton={"Adicionar"}/>
        }
     })

    
     const renderDrinks = restaurantDetails && restaurantDetails.map((foods)=> {
        if (foods.category === "Bebida") {
            return <ProductsCard foods={foods} key={foods.id} action={() =>addProduct(foods)} txtButton={"Adicionar"}/>

        }
     })
    
     const renderAcompanhamentos = restaurantDetails && restaurantDetails.map((foods)=> {
        if (foods.category === "Acompanhamento") {
            return <ProductsCard foods={foods} key={foods.id} action={() =>addProduct(foods)} txtButton={"Adicionar"}/>

        }
     })

   const InfsRestaurant = () => {
     if (restaurant && restaurant) {
        return <>
        
        <CardRestaurantDetails

            logoUrl={restaurant.logoUrl}
            name={restaurant.name} 
            category={restaurant.category}
            deliveryTime={restaurant.deliveryTime}
            address={restaurant.address}
            shipping={restaurant.shipping}
        /> 
        
    </>
     }
   }
   

    return (
    <S.Container>   
   
        {InfsRestaurant()}
      
        <S.CardProdutos>        
            <S.TitleCategory>
                <h4>Principais</h4>
            </S.TitleCategory>        
            <S.Line>
                <h4>{renderPrincipais}</h4>
            </S.Line>

            
            <S.TitleCategory>
                <h4>Bebidas</h4>
            </S.TitleCategory>

            <S.Line>
                <h4>{renderDrinks}</h4>
            </S.Line>
            
           
            <S.TitleCategory>
                <h4>Acompanhamentos</h4>
            </S.TitleCategory>


            <S.Line>
                <h4>{renderAcompanhamentos}</h4>
            </S.Line>
        </S.CardProdutos>
        <Footer/>

</S.Container>
        
    );
  }


  
  export default RestaurantDetails;


  



 