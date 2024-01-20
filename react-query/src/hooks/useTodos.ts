import {useQuery} from "@tanstack/react-query";
import TodoService from "../services/todo.service";
import {ITodo} from "../app.interface";

export const useTodos = () => {
  return  useQuery({
    queryKey: ['todos'],
    queryFn: () => TodoService.getAll(),
    select: ({data}):ITodo[] => data,
  })
}
