import "../index.css";

export default function TaskName({ time, task }) {
  return (
    <div>
      <p>{time}</p>
      <h5 className="task-color">{task}</h5>
    </div>
  );
}
