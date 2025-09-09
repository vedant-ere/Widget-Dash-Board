import React from 'react';

const Widget = ({ widget }) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 bg-white hover:shadow-md transition-shadow">
      {/* Widget Content */}
      <h3 className="font-medium text-gray-800 mb-2">{widget.name}</h3>
      <p className="text-sm text-gray-600">{widget.text}</p>
      
      {/* Optional: Add a small indicator that it's active */}
      <div className="mt-3 flex justify-end">
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
          Active
        </span>
      </div>
    </div>
  );
};

export default Widget;