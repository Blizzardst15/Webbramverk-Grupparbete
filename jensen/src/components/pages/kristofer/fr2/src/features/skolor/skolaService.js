import axios from 'axios'

const API_URL= '/api/skolor'

const createSkola = async (skolData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }


    const response = await axios.post(API_URL, skolData, config)

    return response.data
}

const getSkolor = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

const getSkolor2 = async () => {

    const response = await axios.get(API_URL)

    return response.data
}

//Delete skola
const deleteSkola = async (skolaId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.delete(API_URL + skolaId, config)

    return response.data
}

const skolaService ={
    createSkola,
    getSkolor,
    getSkolor2,
    deleteSkola
}


export default skolaService