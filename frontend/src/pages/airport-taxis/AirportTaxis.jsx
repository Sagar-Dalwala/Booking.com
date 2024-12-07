import AirportTaxisFAQ from "../../modules/airport-taxis/AirportTaxisFAQ";
import AirportTaxisForm from "../../modules/airport-taxis/AirportTaxisForm";
import AirportTaxisPackages from "../../modules/airport-taxis/AirportTaxisPackages";
import AirportTaxisServices from "../../modules/airport-taxis/AirportTaxisServices";
import AirportTaxisStaticContainer from "../../modules/airport-taxis/AirportTaxisStaticContainer";

const AirportTaxis = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <AirportTaxisForm />
        <AirportTaxisStaticContainer />
        <AirportTaxisServices />
        <AirportTaxisPackages />
        <AirportTaxisFAQ />
      </div>  
    </div>
  );
};

export default AirportTaxis;
