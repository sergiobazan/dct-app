import deadfulTomatoes from "../assets/deadful-tomatoes.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export const Header = ({ title, setTitle }) => {
  // const [title, setTitle] = useState("");

  return (
    <div className="header">
      <div className="header-logo-container">
        <img src={deadfulTomatoes} alt="deadful-tomatoes" />
      </div>
      <div className="header-searchbar-container">
        <div className="header-searchbar">
          <AiOutlineSearch color="red" />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
