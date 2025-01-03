import { useState } from "react";
import AddFriend from "./AddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import FriendsList from "./FriendsList";

const initFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initFriends);
  const [showAddFrined, setShowAddFrined] = useState(false);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFrined(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFrined && <AddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={(e) => setShowAddFrined((show) => !show)}>
          {showAddFrined ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
