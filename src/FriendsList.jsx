import { useState } from "react";
import AddFriend from "./AddFriend";
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
      <button onClick={() => setToggleAddFriend((e) => !e)}>
        {toggleAddFriend ? "Close" : "Add friend"}
      </button>
      {toggleAddFriend && <AddFriend />}
    </div>
  );
}

export default FriendsList;
