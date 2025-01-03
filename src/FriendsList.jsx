import { useState } from "react";
import Friend from "./Friend";

function FriendsList({ friends }) {
  const [toggleAddFriend, setToggleAddFriend] = useState(false);

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
