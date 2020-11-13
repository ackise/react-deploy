const initialStore = {
    modalIsOpen: false
  }
  const modalReducer = (store = initialStore,action) =>{
    switch (action.type) {
      case 'TOGGLE_MODAL':
          return {
              ...store,
              modalIsOpen: !store.modalIsOpen,
          }

        default:
          return store
     
    }
  }
    
export default modalReducer;