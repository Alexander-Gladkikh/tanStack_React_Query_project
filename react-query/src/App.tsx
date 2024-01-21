import {useTodos} from "./hooks/useTodos";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {SyntheticEvent, useState} from "react";
import todoService from "./services/todo.service";

function App() {
  const {isLoading, data} = useTodos()
  // const queryClient = useQueryClient()
  const [title, setTitle] = useState('')

  const {mutate} = useMutation({
    mutationKey: ['create todo'],
    mutationFn: (title: string) => todoService.create(title),
    onSuccess(){
      setTitle('')
      alert('Todo created!')
    }
  })

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    mutate(title)
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
    }}>
      {/*<button onClick={() => queryClient.invalidateQueries({queryKey: ['todos']})}>Refresh</button>*/}
      <div>
        <h2>Create todo: </h2>
        <form onSubmit={submitHandler}>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder={'Enter todo'}>
          </input>
          <button>Create</button>
        </form>
      </div>
      <div>
        <h1>Todos</h1>
        {isLoading
          ? <div>Loading....</div>
          : data?.length
            ? data.map((todo) => (
              <div key={todo.id}>
                <b>{todo.id}: {todo.title}</b>)
              </div>
            ))
            : <h1>Data is not found</h1>
        }
      </div>
    </div>
)
}
export {App}
