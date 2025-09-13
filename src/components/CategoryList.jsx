import React from 'react';
import Widget from './Widget';

const CategoryList = ({ categoryName, widgets, onRemoveWidget, onOpenModal }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-6 text-gray-800">{categoryName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => onRemoveWidget(categoryName, widget.id)}
          />
        ))}
        <button
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center text-gray-400 hover:bg-gray-50 transition-colors"
          onClick={() => onOpenModal(categoryName)}
        >
          <span className="text-3xl">+</span>
          <span>Add Widget</span>
        </button>
      </div>
    </div>
  );
};

export default CategoryList;