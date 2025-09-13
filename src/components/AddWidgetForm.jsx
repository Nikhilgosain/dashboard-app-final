import React, { useState } from 'react';

const AddWidgetForm = ({ onClose, onAddWidget, categoryName }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');
  const [widgetType, setWidgetType] = useState('text-only');

  const handleAdd = () => {
    if (widgetName && widgetContent) {
      const newWidget = {
        id: `custom-${Date.now()}`,
        name: widgetName,
        content: widgetContent,
        type: widgetType,
      };
      onAddWidget(categoryName, newWidget);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-full text-center shadow-lg">
        <h3 className="text-xl font-bold mb-4">Add Widget to {categoryName}</h3>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Widget Content"
          value={widgetContent}
          onChange={(e) => setWidgetContent(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={widgetType}
          onChange={(e) => setWidgetType(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="text-only">Text Only</option>
          <option value="donut-chart">Donut Chart</option>
          <option value="bar-chart">Bar Chart</option>
        </select>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="py-2 px-4 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors">
            Cancel
          </button>
          <button onClick={handleAdd} className="py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetForm;