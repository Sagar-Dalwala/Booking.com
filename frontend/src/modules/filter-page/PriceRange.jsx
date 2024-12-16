/* eslint-disable react/prop-types */
const PriceRange = ({ minSliderValue, setMinSliderValue, minPriceValue }) => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Your Budget (per night)</h3>
      <div className="flex items-center gap-4">
        <input
          id="default-range"
          type="range"
          name="min-price"
          min={0}
          max={100}
          step={5}
          value={minSliderValue}
          onChange={(e) => setMinSliderValue(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
      <p className="text-sm text-gray-500 mt-2">₹{Math.round(minPriceValue)}</p>
    </div>
  );
};

export default PriceRange;
