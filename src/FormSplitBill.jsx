import Button from "./Button";

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split bill with:</h2>

      <label>💵 Bill value</label>
      <input type="text" />

      <label>🙋🏼‍♂️ Your expense</label>
      <input type="text" />

      <label> 🧑‍🤝‍🧑 ()'s expense</label>
      <input type="text" disabled />

      <label> 🧑‍🤝‍🧑 Who's paying the bill</label>
      <select>
        <option value="">You</option>
        <option value="friend">()</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
