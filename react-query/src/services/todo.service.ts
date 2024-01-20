import {ITodo} from "../app.interface";
import axios from "axios";

class TodoService {
  private URL = `https://jsonplaceholder.typicode.com`

  async getAll() {
   return axios.get<ITodo[]>(`${this.URL}/todos`)
  }

  async getById(id: string) {
    return axios.get<ITodo>(`${this.URL}/todos/${id}`)
  }
}

export default new TodoService();
