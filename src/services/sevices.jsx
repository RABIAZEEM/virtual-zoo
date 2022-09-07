import React from 'react'
function serviceAxios() {
  return (
    <div>serviceAxios</div>
  )
}
export default serviceAxios
import axios from "axios";
export const serviceAxios=() => {
    const url= "https://zoo-animal-api.herokuapp.com"
    const get =async() => {
         const res = await axios.get(url);
         return res;
    };
    const create = async (data) => {
        const res = await axios.post(url,data);
        return res;
    };
  
    return {
        get,
    }
}