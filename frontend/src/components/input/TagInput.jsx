/* eslint-disable react/prop-types */
import  { useState } from "react";

const CustomTagInput = ({ label, placeholder, onTagsChange, tags = [] }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (!tags.includes(newTag)) {
        onTagsChange([...tags, newTag]);
      }
      setInputValue(""); // Clear input
    }
  };

  const handleDelete = (tagToDelete) => {
    onTagsChange(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex flex-wrap items-center gap-2 border p-2 rounded-md">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-md shadow-md"
          >
            {tag}
            <button
              type="button"
              onClick={() => handleDelete(tag)}
              className="ml-2 text-white focus:outline-none"
            >
              &times;
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "Add a tag"}
          className="flex-1 outline-none border-none px-3 py-1 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default CustomTagInput;
