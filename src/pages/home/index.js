import { useEffect } from "react"
import { setUsers } from "../../store/actions"
import { auth } from '../../config/firebase'
import API from '../../config/axios'
import "../../styles/Home.css"

function Home({ currentUser, users, dispatch }) {

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
        <p>list to switch profile</p>
        <ul>
          {users.map(user => (
            <li
              title={`click to swith account from ${currentUser?.email} to ${user?.email}`}
              key={user?.uid}
              onClick={() => updateUser(user?.uid)}
            >
              {user?.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
