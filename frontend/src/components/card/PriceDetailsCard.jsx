const PriceDetailsCard = () => {
  return (
    <div className="rounded-lg p-4">
      {/* <h2 className="text-xl font-semibold mb-4 text-gray-800">Price Details</h2> */}
      <div className="space-y-2">
        {/* Ticket Details */} 
        <div className="flex justify-between font-bookingBold">
          <span className="text-gray-600 ">Tickets (3 adults)</span>
          <span className="font-medium text-gray-800">INR 17,272.15</span>
        </div>
        {/* Flight Fare */}
        <div className="flex justify-between font-bookingBold">
          <span className="text-gray-600">Flight fare</span>
          <span className="font-medium text-gray-800">INR 15,568.15</span>
        </div>
        {/* Taxes and Charges */}
        <div className="flex justify-between font-bookingBold">
          <span className="text-gray-600">Taxes and charges</span>
          <span className="font-medium text-gray-800">INR 1,704.00</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Total */}
      <div className="space-y-1">
        <div className="text-sm text-gray-600">Includes taxes and charges</div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>INR 17,272.15</span>
        </div>
      </div>
    </div>
  );
};

export default PriceDetailsCard;
