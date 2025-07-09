import type { IListItem } from "./TodoList";
import { useState } from "react";
import { nanoid } from "nanoid";
import { memo } from "react";

const Input = ({
  list,
  setList,
}: {
  list: IListItem[];
  setList: React.Dispatch<React.SetStateAction<IListItem[]>>;
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddItem = (text: string) => {
    if (!text) return;

    const newItem: IListItem = { id: nanoid(), text, isDone: false };
    setList([...list, newItem]);
    setInputValue("");
  };

  return (
    <input
      type="text"
      className="todo__input"
      placeholder="Добавить задачу"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleAddItem(inputValue)}
    />
  );
};

export default memo(Input);
