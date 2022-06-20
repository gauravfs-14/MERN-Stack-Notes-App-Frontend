import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { api_uri } from "../variables";

function NoteForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);
  const formSubmit = (event) => {
    event.preventDefault();
    fetch(`${api_uri}/${location.state.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Updated the Note");
        navigate("/");
      });
  };
  return (
    <form
      className={`fixed inset-0 w-full h-full z-50 bg-slate-800 text-yellow-50 flex items-center justify-center flex-col`}
      onSubmit={formSubmit}
    >
      <div className="w-1/2 text-black">
        <input
          type="text"
          placeholder="Enter Title"
          className="w-full mb-3 p-3 rounded-lg"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Enter Description"
          className="w-full p-3 mb-6 rounded-lg"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
      <div className="flex gap-6">
        <button type="submit" className="p-2 bg-white text-black rounded-lg">
          Update
        </button>
        <Link to="/">
          <button className="p-2 bg-white text-black rounded-lg">Close</button>
        </Link>
      </div>
    </form>
  );
}

export default NoteForm;
