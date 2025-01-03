import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  //derived state
  const paidByFriend = bill ? bill - paidByUser : "";

  // event handlers
  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {friend.name}:</h2>

      <label>💵 Bill value</label>
      <input
        type="text"
        onChange={(e) => setBill(Number(e.target.value))}
        value={bill}
      />

      <label>🙋🏼‍♂️ Your expense</label>
      <input
        type="text"
        onChange={(e) =>
          Number(e.target.value) > bill
            ? paidByUser
            : setPaidByUser(Number(e.target.value))
        }
        value={paidByUser}
      />

      <label> 🧑‍🤝‍🧑 {friend.name}'s expense</label>
      <input type="text" value={paidByFriend} disabled />

      <label> 🧑‍🤝‍🧑 Who's paying the bill</label>
      <select
        onChange={(e) => setWhoIsPaying(e.target.value)}
        value={whoIsPaying}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
