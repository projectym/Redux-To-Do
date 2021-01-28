import './App.css';
import AddTodo from './components/AddTodo'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div className="App">
      <h1>To do App w/Redux</h1>
      <AddTodo />
      <ToDoList />
    </div>
  );
}

export default App;
