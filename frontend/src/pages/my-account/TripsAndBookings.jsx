

const TripsAndBookings = () => {
  // Mock Data
  const trips = [
    {
      id: 1,
      type: "Hotel",
      title: "Luxury Stay at The Grand Hotel",
      location: "New York, USA",
      checkIn: "2024-12-20",
      checkOut: "2024-12-25",
      status: "Upcoming",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      type: "Flight",
      title: "Flight to Paris",
      location: "From New York to Paris",
      departure: "2024-12-15",
      arrival: "2024-12-16",
      status: "Upcoming",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      type: "Hotel",
      title: "Beach Resort Stay",
      location: "Maldives",
      checkIn: "2024-11-10",
      checkOut: "2024-11-15",
      status: "Completed",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="bg-blue-600 text-white py-4 px-6 rounded-md shadow-md max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold">Trips and Bookings</h1>
        <p>View your upcoming and past trips all in one place.</p>
      </div>

      {/* Content */}
      <div className="mt-6 max-w-5xl mx-auto">
        {/* Upcoming Trips */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trips
              .filter((trip) => trip.status === "Upcoming")
              .map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white rounded-md shadow-md p-4 hover:shadow-lg transition"
                >
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{trip.title}</h3>
                    <p className="text-gray-600">{trip.location}</p>
                    {trip.type === "Hotel" ? (
                      <p className="text-gray-500">
                        {`Check-in: ${trip.checkIn}`} <br />
                        {`Check-out: ${trip.checkOut}`}
                      </p>
                    ) : (
                      <p className="text-gray-500">
                        {`Departure: ${trip.departure}`} <br />
                        {`Arrival: ${trip.arrival}`}
                      </p>
                    )}
                  </div>
                  <button className="mt-4 text-primary font-medium hover:underline">
                    View Details
                  </button>
                </div>
              ))}
          </div>
        </section>

        {/* Past Trips */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Past Trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trips
              .filter((trip) => trip.status === "Completed")
              .map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white rounded-md shadow-md p-4 hover:shadow-lg transition"
                >
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{trip.title}</h3>
                    <p className="text-gray-600">{trip.location}</p>
                    {trip.type === "Hotel" ? (
                      <p className="text-gray-500">
                        {`Check-in: ${trip.checkIn}`} <br />
                        {`Check-out: ${trip.checkOut}`}
                      </p>
                    ) : (
                      <p className="text-gray-500">
                        {`Departure: ${trip.departure}`} <br />
                        {`Arrival: ${trip.arrival}`}
                      </p>
                    )}
                  </div>
                  <button className="mt-4 text-primary font-medium hover:underline">
                    View Details
                  </button>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TripsAndBookings;
