import React from "react";
import { Link } from "react-router-dom";
import { api_uri } from "../variables";

function NoteCard(props) {
  const deleteNote = () => {
    fetch(`${api_uri}/${props.id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        props.func();
      });
  };
  return (
    <div className="w-[400px] h-[500px] bg-slate-900 text-yellow-50 p-4 m-4 rounded-lg text-center flex flex-col justify-around break-all">
      <div className="flex-grow">
        <h4 className="text-3xl font-bold mb-3 border-b-2 border-yellow-50 ">
          {props.title}
        </h4>
        <p>{props.description}</p>
      </div>
      <div className="items-end flex gap-4">
        <Link
          to={"/update"}
          state={{
            title: props.title,
            description: props.description,
            id: props.id,
          }}
        >
          <p className="hover:underline cursor-pointer">Edit</p>
        </Link>
        <button className="hover:underline cursor-pointer" onClick={deleteNote}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
