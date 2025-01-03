import Friend from "./Friend";

function FriendsList({ friends }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} />
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
