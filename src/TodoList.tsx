import TodoListItem from "./TodoListItem";
import React, { useMemo } from "react";
import type { IListItem, FilterType } from "./types";

const TodoList = ({
  list,
  setList,
  filter,
}: {
  list: IListItem[];
  setList: React.Dispatch<React.SetStateAction<IListItem[]>>;
  filter: FilterType;
}) => {
  const filteredList = useMemo(
    () =>
      list.filter((item) =>
        filter === "all"
          ? true
          : filter === "active"
            ? !item.isDone
            : item.isDone,
      ),
    [list, filter],
  );

  return (
    <>
      <ul className="todo__list">
        {filteredList.map((item) => (
          <TodoListItem key={item.id} item={item} setList={setList} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
