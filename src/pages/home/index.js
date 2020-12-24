import { useEffect } from "react"
import { setUsers } from "../../store/actions"
import { auth } from '../../config/firebase'
import API from '../../config/axios'
import UserList from "./userList"
import "../../styles/home.css"

const Home = ({ currentUser, users, dispatch }) => {
  useEffect(() => {
    API.get('users').then(({ data: { users } }) => {
      dispatch(setUsers(users))
    }).catch(error => alert(error))
  }, [dispatch])

  const updateUser = id => {
    API.post('createcustomtoken', { id })
      .then(({ data }) => {
        auth.signInWithCustomToken(data)
          .catch(error => alert(error))
      }).catch(error => alert(error))
  }

  return (
    <div className="home">
      <div className="home__container">
        <UserList
          users={users}
          currentUser={currentUser}
          updateUser={updateUser}
        />
      </div>
    </div>
  )
}

export default Home
