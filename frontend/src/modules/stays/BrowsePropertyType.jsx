import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LeftScrollButton from "../../components/button/LeftScrollButton";
import RightScrollButton from "../../components/button/RightScrollButton";

const BrowsePropertyType = () => {
  const navigate = useNavigate();

  const location = "New York, USA";
  const scrollRef = useRef(null);

  const propertyTypes = [
    {
      id: 1,
      title: "Hotels",
      image: "https://via.placeholder.com/300x200?text=Hotels",
    },
    {
      id: 2,
      title: "Apartments",
      image: "https://via.placeholder.com/300x200?text=Apartments",
    },
    {
      id: 3,
      title: "Resorts",
      image: "https://via.placeholder.com/300x200?text=Resorts",
    },
    {
      id: 4,
      title: "Villas",
      image: "https://via.placeholder.com/300x200?text=Villas",
    },
    {
      id: 5,
      title: "Cabins",
      image: "https://via.placeholder.com/300x200?text=Cabins",
    },
    {
      id: 6,
      title: "Hostels",
      image: "https://via.placeholder.com/300x200?text=Hostels",
    },
    {
      id: 7,
      title: "Luxury Homes",
      image: "https://via.placeholder.com/300x200?text=Luxury+Homes",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  const handlePropertyTypeClick = (propertyType) => {
    navigate(`/stays-filter/${propertyType.id}`, { state: propertyType });
  };

  return (
    <div className="bg-gray-100 py-10 font-booking">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-8">
          Browse by property type in {location}
        </h2>

        {/* Scroll Buttons */}
        <LeftScrollButton
          scroll={scroll}
          className="absolute left-0 top-[60%] transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        />
        <RightScrollButton
          scroll={scroll}
          className="absolute right-0 top-[60%] transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        />

        {/* Property Types Scrollable Grid */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hidden px-4 md:px-0"
        >
          {propertyTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => handlePropertyTypeClick(type)}
              className="flex flex-col items-start cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-all min-w-[250px] md:w-[280px]"
            >
              {/* Image */}
              <img
                src={type.image}
                alt={type.title}
                className="rounded-t-lg w-full h-36 object-cover"
              />
              {/* Title */}
              <div className="p-4">
                <h3 className="text-lg font-medium">{type.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePropertyType;
