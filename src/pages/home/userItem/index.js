import PropTypes from 'prop-types'
import Item from "../../../components/item"

const UserItem = ({ user, currentUser, updateUser }) => {
  const update = () => {
    updateUser(user?.uid)
  }

  return (
    <Item
      title={`click to swith account from ${currentUser?.email} to ${user?.email}`}
      selected={currentUser?.uid === user?.email}
      onClick={update}
    >
      {user?.email}
    </Item>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired
}

export default UserItem
