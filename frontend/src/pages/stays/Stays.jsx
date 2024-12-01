import BlackFridayDeals from "../../modules/stays/BlackFridayDeals";
import BlogDetails from "../../modules/stays/BlogDetails";
import BrowsePropertyType from "../../modules/stays/BrowsePropertyType";
import ExploreLocation from "../../modules/stays/ExploreLocation";
import StaysForm from "../../modules/stays/StaysForm";
import StaysSearchHistory from "../../modules/stays/StaysSearchHistory";
import TrendingDestination from "../../modules/stays/TrendingDestination";
import TripPlanner from "../../modules/stays/TripPlanner";

const Stays = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <StaysForm />
        <StaysSearchHistory />
        <BrowsePropertyType />
        <TrendingDestination />
        <ExploreLocation />
        <TripPlanner />
        <BlackFridayDeals />
        <BlogDetails />
      </div>
    </div>
  );
};

export default Stays;
