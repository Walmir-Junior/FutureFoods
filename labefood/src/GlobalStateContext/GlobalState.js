import React, { useState } from 'react'
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  
  const [cart, setCart]= useState([])
  const [restaurant, setRestaurant] = useState ()

 const addProduct = (product) => {

  const index = cart.findIndex((productInCart)=>{
    if (productInCart.id === product.id) {
        return true
    } else {
        return false
    }
  })
  if(index === -1) {
    const novoProduto = {
      ...product, 
        quantity:1
    }
    const newCart = [...cart,novoProduto]
    setCart(newCart)
    alert("Produto adicionado")
  }
  else{
    const newCart = cart.map((productInCart)=>{
      if (productInCart.id === product.id){
        return {...productInCart, quantity : productInCart.quantity +1}
      }
      else{
        return productInCart
      }
      
    })
    setCart(newCart)
      alert("+ 1 produto add")
  }
  
 }
 
 const removeProductInCart = (product) => {

   const index = cart.findIndex((productInCart)=>{
     if (productInCart.id === product.id) {
       return true
      } else {
        return false
      }
    })
    
    
    if(index !== -1){
      const newCart = cart.map((productInCart)=>{
        if (productInCart.id === product.id){
          return {...productInCart, quantity: productInCart.quantity - 1}
        }
        else{
          return productInCart
        }  
      })
      .filter((productInCart) => {
        if(productInCart.quantity < 1){
          return false
        } else {
          return true
        }
    })
      setCart(newCart)
      alert(`${product.name} removido`)
      
    }
  }
  
  
  const teste ={
  addProduct,
  removeProductInCart,
  cart,
  restaurant, 
  setRestaurant
  }

  return (
   <GlobalStateContext.Provider value={teste} >
      {props.children}
   </GlobalStateContext.Provider>
  )
}

export default GlobalState