import React from 'react';
import { useDashBoard } from '../../context/dashBoardContext.jsx';
import Widget from '../Widget/Widget';
import AddWidget from '../AddWidget/AddWidget';
import Search from '../Search/Search';

const Dashboard = () => {
  const { dashboardData } = useDashBoard();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your widgets and categories</p>
      </div>

      {/* Search */}
      <Search />

      {/* Categories Container */}
      <div className="space-y-8">
        {dashboardData.categories.map(category => (
          <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
            {/* Category Header */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {category.name}
            </h2>
            
            {/* Widgets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.widgets.map(widget => (
                <Widget 
                  key={widget.id} 
                  widget={widget} 
                  categoryId={category.id}
                />
              ))}
              
              {/* Add Widget Button */}
              <AddWidget 
                categoryId={category.id}
                categoryName={category.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;