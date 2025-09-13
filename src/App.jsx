import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import AddWidgetForm from './components/AddWidgetForm';
import initialData from './dashboardData.json';

const App = () => {
  const [dashboard, setDashboard] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenModal = (categoryName) => {
    setSelectedCategory(categoryName);
    setIsModalOpen(true);
  };

  const handleAddWidget = (categoryName, newWidget) => {
    setDashboard(prevDashboard => ({
      ...prevDashboard,
      [categoryName]: [...prevDashboard[categoryName], newWidget]
    }));
  };

  const handleRemoveWidget = (categoryName, widgetId) => {
    setDashboard(prevDashboard => ({
      ...prevDashboard,
      [categoryName]: prevDashboard[categoryName].filter(widget => widget.id !== widgetId)
    }));
  };

  const filteredCategories = Object.keys(dashboard).reduce((acc, categoryKey) => {
    const widgets = dashboard[categoryKey].filter(widget =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (widgets.length > 0) {
      acc[categoryKey] = widgets;
    }
    return acc;
  }, {});

  return (
  <div className="w-screen h-screen bg-gray-100 p-8 font-sans overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">CNAPP Dashboard</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search widgets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {Object.keys(filteredCategories).map(categoryKey => (
        <CategoryList
          key={categoryKey}
          categoryName={categoryKey}
          widgets={filteredCategories[categoryKey]}
          onRemoveWidget={handleRemoveWidget}
          onOpenModal={handleOpenModal}
        />
      ))}

      {isModalOpen && (
        <AddWidgetForm
          categoryName={selectedCategory}
          onClose={() => setIsModalOpen(false)}
          onAddWidget={handleAddWidget}
        />
      )}
    </div>
  );
};

export default App;