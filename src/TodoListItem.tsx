import CircleIcon from "./assets/icons/circle.svg?react";
import CircleCheckIcon from "./assets/icons/check_circle.svg?react";
import type { IListItem } from "./types";
import { memo } from "react";

const TodoListItem = ({
  item,
  setList,
}: {
  item: IListItem;
  setList: React.Dispatch<React.SetStateAction<IListItem[]>>;
}) => {
  const handleClick = () => {
    setList((prevList) =>
      prevList.map((i) => (i.id === item.id ? { ...i, isDone: !i.isDone } : i)),
    );
  };

  return (
    <li className="todo__listItem" onClick={handleClick}>
      {item.isDone ? <CircleCheckIcon /> : <CircleIcon />}
      <p
        className={`todo__listItemText ${item.isDone ? "todo__listItemText--done" : ""}`}
      >
        {item.text}
      </p>
    </li>
  );
};

export default memo(TodoListItem);
