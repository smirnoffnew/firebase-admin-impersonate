import List from "../../../components/list"
import UserItem from "../userItem"

const UserList = ({ users, updateUser }) => {
  return (
    <div className="home">
      <div className="home__container">
        <List
          title={'list to switch profile'}
          data={users}
          renderItem={(user) => (
            <UserItem
              key={user?.uid}
              user={user}
              updateUser={updateUser}
            />
          )}
        />
      </div>
    </div>
  )
}

export default UserList
