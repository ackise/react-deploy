import * as actions from "./usersActionTypes";
import config from "../../config.json";
import http from '../../services/httpService';



export const loadUsersFromServer = (counts,link ) => (dispatch)=>{
    counts = typeof counts !== 'undefined' ? counts : 3
    link = typeof link !== 'undefined' ? link : `${config.apiEndpoint}/users?count=${counts}`
    dispatch({type:actions.GET_USERS , payload:true})
   
    return http
        .get(link)
        .then((result) => {
            dispatch({type:actions.SAVE_DATA, payload: result.data})
            dispatch({type:actions.GET_USERS , payload:false})
        })
    
}

export const showMore = (counts,link) => (dispatch)=>{

 dispatch(loadUsersFromServer(counts,link))

}
