import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { showMore } from '../../../redux/users/usersActions';
import UserCard from '../../UserCard/UserCard';
import './Section3.scss'




const Section3 = (props)=> {
    
    const dispatch = useDispatch()

    const {users,data}  = props

    let link = typeof data !== 'undefined' ? data : []
    let list = typeof users !== 'undefined' ? users : []
    let mapped = list.map(function(el,i){
        return {user:el ,index:i, value:el.registration_timestamp}
    })
    mapped.sort(function(a,b){
        return a.value <b.value ? 1 : -1
   
    })
    const sortedUsers = mapped.map(function(el) {
        return list[el.index]
    })

    return (
        <div className='users' >
            <h1 className='users__title'>Our cheerful users</h1>
            {sortedUsers.map(user => <UserCard  key={user.id} id={user.id}  name={user.name}  email={user.email} phone={user.phone} position={user.position} regtime={user.registration_timestamp} photo={user.photo} />)}
            {data.page !== data.total_pages && <button className='users__button' onClick={() => dispatch(showMore(3,link.links.next_url))}>Show more</button>}
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
      users: state.users.data.users,
      data: state.users.data,
 
    }
  }

export default connect(mapStateToProps)(Section3)