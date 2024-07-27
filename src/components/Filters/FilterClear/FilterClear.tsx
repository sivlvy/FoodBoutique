import scss from "./filter-clear.module.scss";
import { resetFilter } from "../../../redux/filters/filter-slice.ts";
import { useAppDispatch } from "../../../hooks/hooks.ts";

export interface FilterClearProps {}

export default function FilterClear({}: FilterClearProps) {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    console.log("reset");
    dispatch(resetFilter());
  };

  return (
    <button className={scss.button} onClick={handleReset} type="submit">
      Clear all
    </button>
  );
}
