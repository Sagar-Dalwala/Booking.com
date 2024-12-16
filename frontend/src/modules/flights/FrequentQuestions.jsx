const FrequentQuestions = () => {
  const containerData = [
    {
      id: 1,
      question: "How do I find the cheapest flights on Booking.com?",
      answer:
        "You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors such as when you are booking and when you want to travel.",
    },
    {
      id: 2,
      question: "Can I book one way flight tickets on Booking.com?",
      answer:
        "Yes, you can book one way, round trip and multi city flights on our site.",
    },
    {
      id: 3,
      question: "How far in advance can I book a flight?",
      answer:
        "You can book a flight up to one year before your departure date.",
    },
    {
      id: 4,
      question: "Do flights get cheaper closer to departure?",
      answer:
        "Generally, flight prices are more likely to increase the closer you get to your flight date.",
    },
    {
      id: 5,
      question: "What is a flexible ticket?",
      answer:
        "A flexible ticket allows you to change your flight with the same airline company by only paying the fare and tax difference. It can only be used for one confirmed change. You are able to add the flexible ticket when booking your flight.",
    },
    {
      id: 6,
      question: "Does Booking.com charge credit card fees?",
      answer:
        "No, we don't charge any credit card fees. You can always see exactly what you’re paying for in the price breakdown when you review your booking.",
    },
  ];
  return (
    <div className="bg-gray-100 py-10 font-booking">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {containerData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-snug">
                {item.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed break-words">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
