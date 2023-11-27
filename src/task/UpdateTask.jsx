import React, { useState, useCallback } from "react";

export default function UpdateTask({ existingItem, onItemUpdated }) {
  if (!existingItem) return;
  const [time, setTime] = useState(existingItem.time);
  const [task, setTask] = useState(existingItem.task);
  const [imageFile, setImageFile] = useState(null);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onItemUpdated({
        ...existingItem,
        time,
        task,
        avatar: imageFile
          ? URL.createObjectURL(imageFile)
          : existingItem.avatar,
      });
      e.target.reset();
    },
    [time, task, imageFile, existingItem]
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
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <input
            placeholder="Task Name"
            style={{ height: 30, width: 350 }}
            value={task}
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
            disabled={!imageFile}
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
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
}
