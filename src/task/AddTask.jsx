import React, { useState, useCallback } from "react";
import { data } from "./data";

export default function AddTask({ onItemAdded }) {
  const [time, setTime] = useState("");
  const [task, setTask] = useState("");
  const [imageFile, setImageFile] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onItemAdded({
        id: data.length + 1,
        time,
        task,
        avatar: URL.createObjectURL(imageFile),
      });
      e.target.reset();
    },
    [time, task, imageFile]
  );

  const handleAvatar = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <input
            placeholder="Time"
            style={{ height: 30, width: 350 }}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <input
            placeholder="Task Name"
            style={{ height: 30, width: 350 }}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <input
            type="file"
            placeholder="Time"
            style={{ height: 30, width: 350 }}
            onChange={(e) => {
              handleAvatar(e);
            }}
          />
        </section>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            // disabled={!imageFile}
            style={{
              background: "#59d0fd",
              color: "white",
              fontWeight: 600,
              height: 30,
              width: 100,
              borderRadius: 4,
              cursor: "pointer",
              marginBottom: 8,
            }}
            type="submit"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
