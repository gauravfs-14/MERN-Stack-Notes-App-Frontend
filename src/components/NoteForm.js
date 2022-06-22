import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api_uri } from "../variables";

function NoteForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formSubmit = (event) => {
    event.preventDefault();
    fetch(`${api_uri}`, {
      method: "POST",
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
        alert("Created the Note");
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
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Enter Description"
          className="w-full p-3 mb-6 rounded-lg"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="flex gap-6">
        <button type="submit" className="p-2 bg-white text-black rounded-lg">
          Submit
        </button>
        <Link to="/">
          <button className="p-2 bg-white text-black rounded-lg">Close</button>
        </Link>
      </div>
    </form>
  );
}

export default NoteForm;
