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
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFrined(false);
  }

  function handleFriendSelection(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFrined(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleFriendSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFrined && <AddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={(e) => setShowAddFrined((show) => !show)}>
          {showAddFrined ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill key={selectedFriend.id} friend={selectedFriend} />
      )}
    </div>
  );
}

export default App;
