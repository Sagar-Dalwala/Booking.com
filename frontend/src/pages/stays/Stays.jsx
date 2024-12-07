import StaysForm from "../../modules/stays/StaysForm";
import StaysSearchHistory from "../../modules/stays/StaysSearchHistory";
// import BlackFridayDeals from "../../modules/stays/BlackFridayDeals";
import BlogDetails from "../../modules/stays/BlogDetails";
import BrowsePropertyType from "../../modules/stays/BrowsePropertyType";
import ExploreLocation from "../../modules/stays/ExploreLocation";
import TrendingDestination from "../../modules/stays/TrendingDestination";
import TripPlanner from "../../modules/stays/TripPlanner";

const Stays = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <StaysForm /> {/* //! navigate this component to filter page of stays */}
        <StaysSearchHistory /> {/* //? navigate this component to details page of stays - DONE */}
        <BrowsePropertyType /> {/* //? navigate this to filter page of stays - DONE */}
        <TrendingDestination /> {/* //? navigate this to filter page of stays - DONE */}
        <ExploreLocation /> {/* //? navigate this to filter page of stays - DONE */}
        <TripPlanner />
        {/* <BlackFridayDeals /> */}
        <BlogDetails /> {/* //? navigate this component to blog page of stays - DONE */}
      </div>
    </div>
  );
};

export default Stays;
