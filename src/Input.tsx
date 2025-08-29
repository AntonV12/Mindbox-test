import type { IListItem } from "./types";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { memo } from "react";

const Input = ({
  setList,
}: {
  setList: React.Dispatch<React.SetStateAction<IListItem[]>>;
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter" && target.value.trim() !== "") {
      const newItem: IListItem = {
        id: nanoid(),
        text: target.value.trim(),
        isDone: false,
      };
      setList((prevList) => [...prevList, newItem]);
      setInputValue("");
    }
  };

  return (
    <input
      type="text"
      className="todo__input"
      placeholder="Добавить задачу"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleAddItem}
    />
  );
};

export default memo(Input);
