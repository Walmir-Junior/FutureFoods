export const URL_BASE = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA"

export const axiosConfig = {
    headers: {
        auth: localStorage.getItem('token')
    }
}