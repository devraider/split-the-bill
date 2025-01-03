import { useState } from "react";
import Button from "./Button";

function AddFriend() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑 Friend</label>
      <input type="text" value={name} onChange={setName} />

      <label>🖼️ Image</label>
      <input type="text" value={image} onChange={image} />

      <Button>Add</Button>
    </form>
  );
}

export default AddFriend;
