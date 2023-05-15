import axios from 'axios'
import { productsFail, productsRequest, productsSuccess } from '../slices/productsSlice'

export const getProducts = (keyword, currentPage) => async (dispatch) => {

    try {

        dispatch(productsRequest()) //requesting the products

        let link = `/api/v1/products?page=${currentPage}`;

        if (keyword) {  

            link += `&keyword=${keyword}`;   
            
        }

        const { data } = await axios.get(link); //hitting the endpoint using the axios

        console.log(data, "products")

        dispatch(productsSuccess(data)) //from here sending the data to productsSlice

    } catch (error) {

        dispatch(productsFail(error.response.data.message)) //displaying the error while not getting the data

    }

}



