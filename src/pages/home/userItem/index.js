import Item from "../../../components/item"

const UserItem = ({ user, updateUser }) => {
  const update = () => {
    updateUser(user?.uid)
  }

  return (
    <Item
      onClick={update}
    >
      {user?.email}
    </Item>
  )
}

export default UserItem
