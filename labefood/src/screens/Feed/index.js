import React, { useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {URL_BASE} from '../../constants/URL_BASE'
import {Container,
        RestaurantsList,
        Header, 
        ContainerCategories, 
        CategoryItem,
        SearchArea} from './styles';
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '../../assets/search.svg'
import Footer from "../../components/Footer";
import useRequestDataWithHeaders from "../../hooks/useRequestDataWithHeaders";
import CardRestaurant from "../../components/CardRestaurant";
import { goToRestaurantDetails } from "../../routes/Coordinator";
import ListCategory from "../../components/ListCategory";




const Feed = () => {
const navigate = useNavigate()
const url = `${URL_BASE}/restaurants`;
const token = localStorage.getItem('token')
const headers = {
  headers:{
    auth: token
  }
}
const [inputValue,setInputValue] = useState("")
const [data,isLoading,error] = useRequestDataWithHeaders(url,headers)
useEffect(()=>getCategoryList(),[data]) 
const categories = []
const [renderCategories, setRenderCategories] = useState([])
const [categoryFilter, setCategoryFilter] = useState('')
const [showCategoriesList, setShowCategoriesList] = useState('visible')

const chooseRestaurant = (id) =>{
  goToRestaurantDetails(navigate,id)
}

const handleInput = (e)=>{
  setCategoryFilter('')
  setInputValue(e.target.value)
}


const choiceCategory = (category) =>{
  setCategoryFilter(category)
}

const getCategoryList = ()=>{data?.restaurants.map((restaurant)=>{
  const checkCategory = categories.find((produto)=> produto === restaurant.category)
  if(!checkCategory){
    categories.push(restaurant.category)}
})
  const categoriesList = data && categories && categories.map((item, index)=>{
    return <CategoryItem 
    key={index} 
    onClick={()=>choiceCategory(item)}
    visibility={showCategoriesList}
    >{item}</CategoryItem>
})
  setRenderCategories(categoriesList)
}

const setCategoriesHidden = () =>{
  setShowCategoriesList('hidden')
}
const setCategorisVisible = () =>{
  setShowCategoriesList('visible')
}

const renderRestaurantsCards = data?.restaurants
.filter((restaurant)=>{return restaurant.category.includes(categoryFilter)})
.filter((restaurant)=>restaurant.name.toUpperCase().includes(inputValue.toUpperCase()))
.map((restaurant)=>{
  return <CardRestaurant
  key={restaurant.id} 
  photo={restaurant.logoUrl}
  name={restaurant.name}
  deliveryTime={restaurant.deliveryTime}
  shipping={restaurant.shipping}
  onClickCard={()=>chooseRestaurant(restaurant.id)}
  />
})

  return (
   <Container>
    <Header>
      <h1>FutureEats</h1>
    </Header>
    <SearchArea>
        <TextField
          placeholder="Restaurante"
          color="common"
          value={inputValue}
          onChange={(e)=>handleInput(e)}
          onFocus={setCategoriesHidden}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={SearchIcon} alt="search icon"/>
              </InputAdornment>
            ),
          }}
        />
    </SearchArea>
    <RestaurantsList>
        <ContainerCategories onClick={setCategorisVisible}>
          {renderCategories}
        </ContainerCategories>
        {renderRestaurantsCards}
    </RestaurantsList>
    <Footer />
   </Container>
  );
}

export default Feed;