import './App.scss';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {loadUsersFromServer } from './redux/users/usersActions';
import { loadingPositions } from './redux/positions/positionsActions';
import Sidebar from './components/Menu/Sidebar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

const  App = (props)=> {
  const {getUsers,getPositions,loadingUsers,loadingPositions} = props

  useEffect(() =>{
    getUsers();
    getPositions();
  },[]) 

  // const width = window.innerWidth
  // console.log(width)


  return !loadingUsers || !loadingPositions ? <Loader /> :
  
  (
    <div className="App">

        {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/> */}
        <Header/>
        <Body/>
        <Footer/>
    </div>

  );
}

const mapStateToProps = (state) =>{
  return{
    data: state,
    loadingUsers: state.users.data.success,
    loadingPositions: state.positions.success
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {
    getUsers: () => dispatch(loadUsersFromServer()),
    getPositions: ()=> dispatch(loadingPositions())
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
