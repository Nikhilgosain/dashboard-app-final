import React from 'react';

const Widget = ({ widget, onRemove }) => {
  const renderContent = () => {
    switch (widget.type) {
      case 'text-only':
        return (
          <div className="flex justify-center items-center h-full text-gray-500 text-center text-sm">
            {widget.content}
          </div>
        );
      case 'donut-chart':
        return (
          <div className="flex justify-center items-center h-full relative">
            <div className="relative w-28 h-28 rounded-full flex justify-center items-center font-bold text-2xl text-gray-800"
              style={{ border: '10px solid #cbd5e1' }}>
              {widget.content.total}
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full"
                style={{
                  border: '10px solid transparent',
                  borderTopColor: '#3b82f6',
                  borderRightColor: '#ef4444',
                  borderBottomColor: '#fde047',
                  borderLeftColor: '#22c55e',
                  transform: `rotate(${360 * (widget.content.failed / widget.content.total)}deg)`
                }}
              ></div>
            </div>
          </div>
        );
      case 'bar-chart':
        const total = widget.content.total || widget.content.totalImages;
        const criticalWidth = (widget.content.critical / total) * 100;
        const highWidth = (widget.content.high / total) * 100;
        return (
          <div className="h-full w-full flex flex-col justify-end">
            <p className="text-xl font-bold text-gray-800 mb-2">{total}</p>
            <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500"
                style={{ width: `${criticalWidth}%` }}
              ></div>
              <div
                className="h-full bg-orange-500"
                style={{ width: `${highWidth}%` }}
              ></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-700">{widget.name}</h3>
        <button onClick={onRemove} className="text-gray-400 hover:text-red-500 focus:outline-none">&times;</button>
      </div>
      <div className="flex-grow min-h-[120px]">
        {renderContent()}
      </div>
    </div>
  );
};

export default Widget;