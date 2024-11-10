export enum TodoListType {
  All,
  Active,
  Complited,
}

export interface HeaderProps {
  count: number;
  type: TodoListType;
  onAllClear: () => void;
}
