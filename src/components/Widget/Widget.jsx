import React from "react";
import { useDashBoard } from "../../context/dashBoardContext.jsx";

const Widget = ({ widget, categoryId }) => {

  const { removeWidget } = useDashBoard();
  const handleRemove = () => {
    removeWidget(categoryId, widget.id);
  };

  return (
    <div className="relative border border-gray-200 rounded-md p-4 bg-white hover:shadow-md transition-shadow">
      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl"
        aria-label="Remove widget"
      >
        ×
      </button>
      
      {/* Widget Content */}
      <h3 className="font-medium text-gray-800 mb-2 pr-6">{widget.name}</h3>
      <p className="text-sm text-gray-600">{widget.text}</p>
    </div>
  )
};

export default Widget;
