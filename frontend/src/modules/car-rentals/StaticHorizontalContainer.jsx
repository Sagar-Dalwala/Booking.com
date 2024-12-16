import StaticContainer from "../../components/static-container/StaticContainer";

const StaticHorizontalContainer = () => {
  const containerData = [
    {
      id: 1,
      image: "./car-rentals/CustomerService.png",
      title: "We’re here for you",
      description: "Customer support in over 30 languages",
    },
    {
      id: 2,
      image: "./car-rentals/FreeCancellation.png",
      title: "Free cancellation",
      description: "Up to 48 hours before pick-up, on most bookings",
    },
    {
      id: 3,
      image: "./car-rentals/Reviews.png",
      title: "5 million+ reviews",
      description: "By real, verified customers",
    },
  ];
  return (
    <StaticContainer containerData={containerData} />
  );
};

export default StaticHorizontalContainer;
