
// SearchBar component
const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search widgets..."
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};