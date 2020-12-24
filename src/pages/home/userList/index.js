import PropTypes from 'prop-types'
import List from "../../../components/list"
import UserItem from "../userItem"

const UserList = ({ users, currentUser, updateUser }) => {
  return (
    <List
      title={'list to switch profile'}
      data={users}
      renderItem={(user) => (
        <UserItem
          key={user?.uid}
          user={user}
          currentUser={currentUser}
          updateUser={updateUser}
        />
      )}
    />
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired
}

export default UserList
