import React, { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import NoteCard from "./components/NoteCard";
import { api_uri } from "./variables";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch(`${api_uri}`)
      .then((res) => res.json())
      .then((note) => setData(note))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-wrap justify-center">
      <AddNote />
      {data &&
        data
          .slice(0)
          .reverse()
          .map((item) => (
            <NoteCard
              key={item._id}
              id={item._id}
              title={item.title}
              description={item.description}
              func={fetchData}
            />
          ))}
    </div>
  );
}

export default App;
