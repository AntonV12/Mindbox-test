export interface IListItem {
  id: string;
  text: string;
  isDone: boolean;
}

export type FilterType = "all" | "active" | "completed";
