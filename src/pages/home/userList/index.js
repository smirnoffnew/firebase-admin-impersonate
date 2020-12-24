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

export default UserList
