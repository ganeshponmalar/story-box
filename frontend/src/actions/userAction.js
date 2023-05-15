import {
    loginFail,
    loginRequest,
    loginSuccess,
    clearError,
    registerRequest,
    registerSuccess,
    registerFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    logoutSuccess,
    logoutFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail
} from "../slices/authSlice";

import axios from 'axios';
import { config } from "dotenv";

export const login = (email, password) => async (dispatch) => {
    console.log(login, "qwer")

    try {
        dispatch(loginRequest())

        console.log("qhdqu")

        const { data } = await axios.post('/api/v1/login', { email, password });

        console.log(data, 'qweqw')

        dispatch(loginSuccess(data))

    } catch (error) {

        dispatch(loginFail(error.response.data.message))

    }
}


export const clearAuthError = dispatch => {
    dispatch(clearError())
}



export const register = (userData) => async (dispatch) => {


    try {

        dispatch(registerRequest())

        const config = {

            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post(`/api/v1/register`, config);
        dispatch(registerSuccess(data))



    } catch (error) {
        dispatch(registerFail(error.response.data.message))
    }

}

export const loadUser = async (dispatch) => {

    try {

        dispatch(loadUserRequest())

        const { data } = await axios.get(`/api/v1/myprofile`)

        dispatch(loadUserSuccess(data))

    } catch (error) {

        dispatch(loadUserFail(error.response.data.message))

    }
}


export const logout = async (dispatch) => {

    try {

        await axios.get('/api/v1/logout');
        dispatch(logoutSuccess())


    } catch (error) {
        dispatch(logoutFail())
    }
}


export const updateProfile = (userData)=>  async(dispatch)=>{

    try{
        
        dispatch(updateProfileRequest())
    const {data} =  await axios.post(`api/v1/update`,userData,config);
              
    dispatch(updateProfileSuccess(data))
    }catch(error){
        
        dispatch(updateProfileFail(error.response.data.message))
    }

}