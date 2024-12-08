// eslint-disable-next-line react/prop-types
const SortBy = ({ sortOption, handleSortChange }) => {
  return (
    <div>
      <select
        value={sortOption}
        onChange={handleSortChange}
        className="border border-gray-300 rounded-lg p-2"
      >
        <option value="">Sort by</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortBy;
