import axios from 'axios'
import { API_KEY } from '../constants/api.js'

class GetDataApi{
    
    

    async getData(url){
        try{
            const responce = await axios.get(url,{
                params:{
                    apikey:API_KEY,
                    limit:100
                }
               
            })
            return responce.data.data.results
        }
        catch(error){
            console.log(error.message)
            return false
        }
        

    }

}
export const getDataApi = new GetDataApi();