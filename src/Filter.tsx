import type React from "react";
import type { FilterType } from "./types";

const Filter = ({
  filter,
  setFilter,
}: {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}) => {
  const handleChangeFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    setFilter(target.dataset.filter as FilterType);
  };

  return (
    <div className="todo__filter">
      <button
        className={`todo__btn ${filter === "all" ? "todo__filter-btn--active" : ""}`}
        data-filter="all"
        onClick={handleChangeFilter}
      >
        all
      </button>
      <button
        className={`todo__btn ${filter === "active" ? "todo__filter-btn--active" : ""}`}
        data-filter="active"
        onClick={handleChangeFilter}
      >
        active
      </button>
      <button
        className={`todo__btn ${filter === "completed" ? "todo__filter-btn--active" : ""}`}
        data-filter="completed"
        onClick={handleChangeFilter}
      >
        completed
      </button>
    </div>
  );
};

export default Filter;
