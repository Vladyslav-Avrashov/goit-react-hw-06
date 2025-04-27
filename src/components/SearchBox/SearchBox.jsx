import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useId } from "react";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const id = useId();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s["search-box"]}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        type="text"
        id={id}
        value={filter}
        onChange={handleChange}
        placeholder="Type a name..."
      />
    </div>
  );
};

export default SearchBox;
