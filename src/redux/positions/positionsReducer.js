import * as actions from "./positionsActionTypes";

const initialStore = {
    loading:false,
}

const PositionsReducer = (store = initialStore,action)=>{
    switch(action.type){
        case actions.GET_POSITIONS:
            return {...store,loading:action.payload}
        case actions.SAVE_POSITIONS:
            return {...store, ...action.payload}
        default:
            return store;
    }

}

export default PositionsReducer