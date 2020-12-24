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

export default UserItem
