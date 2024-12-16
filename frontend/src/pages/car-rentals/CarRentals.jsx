import CarRentalForm from "../../modules/car-rentals/CarRentalForm";
import FrequentQuestions from "../../modules/car-rentals/FrequentQuestions";
import PopularDestination from "../../modules/car-rentals/PopularDestination";
import StaticHorizontalContainer from "../../modules/car-rentals/StaticHorizontalContainer";

const CarRentals = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <CarRentalForm />
        <StaticHorizontalContainer />
        <FrequentQuestions />
        <PopularDestination />
      </div>
    </div>
  );
};

export default CarRentals;
