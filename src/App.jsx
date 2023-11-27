import TaskCardList from "../src/task/TaskCardList";
import "./index.css";
import AddTask from "./task/AddTask";
import { ItemList } from "./task/Expert";

function App() {
  return (
    <div className="box">
      <div className="card">
        <TaskCardList />
        {/* <ItemList /> */}
      </div>
    </div>
  );
}

export default App;
