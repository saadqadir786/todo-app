import { React } from "react";
import "../index.css";
import check from "../assets/check.png";
import edit from "../assets/edit.png";
import trash from "../assets/trash.png";
import cross from "../assets/cross.png";
export default function Avatar({
  avatar,
  selected,
  onChange,
  id,
  onItemDelete,
  onItemUpdate,
}) {
  return (
    <div>
      <div className="icons-div">
        <img
          height={20}
          width={20}
          src={check}
          alt="check"
          className="pos check-pos icon-bg"
          style={{ display: selected === id ? "block" : "none" }}
        />
        <img
          height={20}
          width={20}
          src={edit}
          alt="edit"
          className="pos edit-pos icon-bg"
          style={{ display: selected === id ? "block" : "none" }}
          onClick={() => {
            onItemUpdate(id);
          }}
        />
        <img
          height={20}
          width={20}
          src={trash}
          alt="trash"
          className="pos trash-pos icon-bg"
          style={{ display: selected === id ? "block" : "none" }}
          onClick={() => onItemDelete(id)}
        />
      </div>
      <div className="icons-div">
        <img
          height={72}
          width={72}
          src={avatar}
          alt="avatar"
          onClick={() => {
            onChange(id);
          }}
        />
        <img
          height={20}
          width={20}
          src={cross}
          alt="cross"
          className={"pos cross-pos icon-bg"}
          style={{ display: selected === id ? "block" : "none" }}
          onClick={() => onChange(null)}
        />
      </div>
    </div>
  );
}
