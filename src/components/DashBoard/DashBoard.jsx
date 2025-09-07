import React from "react";
import { initialDashboardData } from "../../data/dahsboardData.js";

const Dashboard = () => {
  return (
    // h-screen for full height, p-6 for padding
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your widgets and categories</p>
      </div>

      <div className="space-y-8">
        {initialDashboardData.categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {category.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="border border-gray-200 rounded-md p-4 bg-gray-50"
                >
                  <h3 className="font-medium text-gray-800 mb-2">
                    {widget.name}
                  </h3>
                  <p className="text-sm text-gray-600">{widget.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
