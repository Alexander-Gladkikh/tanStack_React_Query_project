import {useTodos} from "./hooks/useTodos";
import {useQueryClient} from "@tanstack/react-query";

function App() {
  const {isLoading, data} = useTodos()
  const queryClient = useQueryClient()

  return (
    <div>
      <button onClick={() => queryClient.invalidateQueries({queryKey: ['todos']})}>Refresh</button>
      {isLoading
        ? <div>Loading....</div>
        : data?.length
          ? data.map((todo) => (
            <div>
              <b>{todo.id}: {todo.title}</b>)
            </div>
          ))
          : <h1>Data is not found</h1>
      }
    </div>
)
}
export {App}
