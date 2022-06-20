import React from "react";
import { Link } from "react-router-dom";

function AddNote() {
  return (
    <>
      <Link to="/form">
        <div className="w-[400px] h-[500px] bg-slate-900 text-yellow-50 p-4 m-4 rounded-lg text-center flex flex-col overflow-y-auto justify-center cursor-pointer items-center">
          <div className="border-2 border-white border-dashed rounded-[50%] h-48 w-48 grid place-items-center">
            <p className="text-9xl font-bold ">+</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default AddNote;
