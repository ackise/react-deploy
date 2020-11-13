
import {TOGGLE_MODAL} from './modalActionTypes'

export const toggleModal = () => (dispatch) => {
    dispatch({type: TOGGLE_MODAL, payload: true})
}