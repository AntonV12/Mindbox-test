import TodoListItem from "./TodoListItem";
import { useState, useEffect, useRef, useMemo } from "react";
import Input from "./Input";

export interface IListItem {
  id: string;
  text: string;
  isDone: boolean;
}

type FilterType = "all" | "active" | "completed";

const TodoList = () => {
  const [list, setList] = useState<IListItem[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const filteredList = useMemo(
    () => list.filter((item) => (filter === "all" ? true : filter === "active" ? !item.isDone : item.isDone)),
    [list, filter]
  );
  const leftAmount: number = useMemo(() => list.filter((item) => !item.isDone).length, [list]);
  // const [minHeight, setMinHeight] = useState<number | "auto">("auto");
  // const todoRef = useRef<HTMLDivElement>(null);

  /* useEffect(() => {
    if (todoRef.current) {
      setMinHeight(todoRef.current.offsetHeight);
    }
  }, [list]); */

  const handleChangeFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    setFilter(target.dataset.filter as FilterType);
    /* if (minHeight === "auto") {
      setMinHeight(todoRef.current ? todoRef.current.offsetHeight : "auto");
    } */
  };

  const handleClearCompleted = () => {
    setList(list.filter((item) => !item.isDone));
    //setMinHeight("auto");
  };

  return (
    <div className="todo" /* ref={todoRef} style={{ minHeight }} */>
      <h1 className="todo__title">Todo List</h1>
      <Input list={list} setList={setList} />

      <ul className="todo__list">
        {filteredList.map((item) => (
          <TodoListItem key={item.id} item={item} setList={setList} />
        ))}
      </ul>

      <div className="todo__footer">
        <p className="todo__amount">{leftAmount} items left</p>

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

        <div className="todo__clear">
          <button className="todo__btn" onClick={handleClearCompleted}>
            clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
