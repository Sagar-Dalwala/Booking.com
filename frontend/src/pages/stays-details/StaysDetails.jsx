import { useParams } from "react-router-dom";

const StaysDetails = () => {
  const { id } = useParams();

  // Mock data for demonstration (replace with dynamic data from a backend later)
  const stays = [
    {
      id: "1",
      title: "Luxury Hotel",
      location: "New York, USA",
      dates: "Jan 12 - Jan 15, 2024",
      price: "$350",
      description: "A luxurious stay with all modern amenities.",
      image: "https://ui-avatars.com/api/?name=John",
    },
    {
      id: "2",
      title: "Beachside Resort",
      location: "Maldives",
      dates: "Feb 20 - Feb 25, 2024",
      price: "$1200",
      description: "Relax by the beach in a serene environment.",
      image: "https://ui-avatars.com/api/?name=Jane",
    },
    // Add other mock stays
  ];

  const stay = stays.find((stay) => stay.id === id);

  if (!stay) {
    return <p>Stay not found!</p>;
  }

  return (
    <div className="p-6">
      <img
        src={stay.image}
        alt={stay.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{stay.title}</h1>
      <p className="text-sm text-gray-600">{stay.location}</p>
      <p className="text-sm text-gray-600">{stay.dates}</p>
      <p className="text-lg font-bold mt-2">{stay.price}</p>
      <p className="mt-4">{stay.description}</p>
    </div>
  );
};

export default StaysDetails;
