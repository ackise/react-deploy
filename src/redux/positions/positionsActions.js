import * as actions from "./positionsActionTypes";
import config from "../../config.json";
import http from '../../services/httpService';

export const loadingPositions = ()=>(dispatch)=>{
    dispatch({type:actions.GET_POSITIONS , payload:true})

    return http
        .get(`${config.apiEndpoint}/positions`)
        .then((result) =>{
            dispatch({type:actions.SAVE_POSITIONS , payload:result.data})
            dispatch({type:actions.GET_POSITIONS , payload:false})
        })

}