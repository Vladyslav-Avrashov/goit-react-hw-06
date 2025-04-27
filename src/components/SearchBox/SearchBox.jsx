import { useId } from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  const id = useId();

  return (
    <div className={s["search-box"]}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder="Type a name..."
      />
    </div>
  );
};

export default SearchBox;
