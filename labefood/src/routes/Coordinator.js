export const goToAddressEdit = (navigate) => {
    navigate('/registeredit')
}

export const goToCart = (navigate) => {
    navigate('/cart')
}

export const goToConfirm = (navigate) => {
    navigate('/confirm')
}

export const goToFeed = (navigate) => {
    navigate('/feed')
}

export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToLogin = (navigate) => {
    navigate('/login')
}

export const goToOrder = (navigate) => {
    navigate('/order')
}

export const goToProfile = (navigate) => {
    navigate('/profile')
}

export const goToProfileEdit = (navigate) => {
    navigate('/profileedit')
}

export const goToMyProfile = (navigate) => {
    navigate('/profile')
}

export const goToRestaurant = (navigate) => {
    navigate('/restaurante')
} 

export const goToRestaurantDetails = (navigate,id) => {
    navigate(`/foods/${id}`)
}

export const goToSearch = (navigate) => {
    navigate('/search')
}

export const goToSignUp = (navigate) => {
    navigate('/signup')
}

export const goBack = (navigate) => {
    navigate(-1)
}