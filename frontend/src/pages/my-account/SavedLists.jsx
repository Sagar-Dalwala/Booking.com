import { useState } from "react";

const SavedLists = () => {
  // Mock Data
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      title: "Beachfront Resort",
      location: "Maldives",
      pricePerNight: "$350",
      rating: 4.8,
      reviews: 120,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Cozy Mountain Cabin",
      location: "Aspen, Colorado",
      pricePerNight: "$280",
      rating: 4.5,
      reviews: 90,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Luxury City Hotel",
      location: "New York, USA",
      pricePerNight: "$450",
      rating: 4.9,
      reviews: 200,
      image: "https://via.placeholder.com/150",
    },
  ]);

  // Handle removing an item
  const handleRemove = (id) => {
    const updatedList = savedItems.filter((item) => item.id !== id);
    setSavedItems(updatedList);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="bg-blue-600 text-white py-4 px-6 rounded-md shadow-md max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold">Saved Lists</h1>
        <p>View and manage your favorite hotels and destinations.</p>
      </div>

      {/* Content */}
      <div className="mt-6 max-w-5xl mx-auto">
        {savedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {savedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md shadow-md hover:shadow-lg transition"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-md"
                />
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.location}</p>
                  <p className="text-gray-500">{`Price: ${item.pricePerNight}/night`}</p>
                  <p className="text-gray-500">
                    {`Rating: ${item.rating} ⭐ (${item.reviews} reviews)`}
                  </p>
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-4 text-red-500 hover:underline"
                  >
                    Remove from list
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white rounded-md shadow-md py-8 px-6">
            <h2 className="text-lg font-semibold mb-4">No saved items found</h2>
            <p className="text-gray-600">
              Save your favorite hotels, properties, or destinations for quick
              access later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedLists;
