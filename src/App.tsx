import { useState, useMemo } from "react";
import TodoList from "./TodoList";
import Input from "./Input";
import Filter from "./Filter";

export interface IListItem {
  id: string;
  text: string;
  isDone: boolean;
}

export type FilterType = "all" | "active" | "completed";

export default function App() {
    const [list, setList] = useState<IListItem[]>([]);
    const [filter, setFilter] = useState<FilterType>("all");
    const leftAmount: number = useMemo(() => list.filter((item) => !item.isDone).length, [list]);

    const handleClearCompleted = () => {
        setList(list.filter((item) => !item.isDone));
    };

    return (
        <div className="todo">
            <h1 className="todo__title">Todo List</h1>
            <Input setList={setList} />
            <TodoList list={list} setList={setList} filter={filter} />

            <div className="todo__footer">
                <p className="todo__amount">{leftAmount} items left</p>

                <Filter filter={filter} setFilter={setFilter} />

                <div className="todo__clear">
                    <button className="todo__btn" onClick={handleClearCompleted}>
                        clear completed
                    </button>
                </div>
            </div>
        </div>
    )
}