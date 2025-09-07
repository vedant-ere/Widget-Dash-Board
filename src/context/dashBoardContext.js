import React, { Children, createContext, useContext, useState } from "react";
import initalData from "../data/dashBoardData.json";

// creating a new context ; think of it as creating a shared data space where we can store and retrive Dashboard's daata
const DashboardContext = createContext();

/* This makes it easy to access the dashboard state in any component. Instead of writing useContext(DashboardContext) everywhere, you just call useDashboard(). It also enforces that only components inside DashboardProvider can use it */
export const useDashBoard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashBoard must be used within DashBoardProvider");
  }
  return context;
};

export const DashboardProvider = ({ children }) => {
  const [dashBoardData, setDashBoardData] = useState(initalData);
  const [searchTerm, setSearchTerm] = useState("");

  const addWidget = (categoryId, widget) => {
    const newWidget = {
      ...widget, //...widget copies all existing properties from the widget argument into this new object.
      id: `widget-${Date.now()}`,
    };

    setDashBoardData((prev) => ({
      ...prev, //We spread ...prev to keep all the existing data unchanged except for what we update.
      categories: prev.categories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, newWidget] }
          : category
      ),
    }));
  };

  const removeWidget = (categoryId, widgetId) => {
    setDashBoardData((prev) => ({
      ...prev,
      categories: prev.categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      ),
    }));
  };

  const getFilteredData = () => {
    if (!searchTerm) {
      return dashBoardData;
    }
    return {
      ...dashBoardData,
      categories: categories.map((category) => ({
        ...category,
        widgets: category.widgets.filter(
          (widget) =>
            widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            widget.text.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      })),
    };
  };

    const value = {
    dashboardData: getFilteredData(),
    searchTerm,
    setSearchTerm,
    addWidget,
    removeWidget
  };
  
    return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );

};
