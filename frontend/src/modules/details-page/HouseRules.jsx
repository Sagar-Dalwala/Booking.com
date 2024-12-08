const HouseRules = () => {
  return (
    <>
      <hr className="border-t border-gray-300 my-10" />
      <div className="px-4 lg:px-8 py-6 bg-gray-50 rounded-lg shadow-md my-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          House Rules
        </h2>
        {/* Check-in and Check-out */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Check-in</h3>
          <p className="text-gray-600">From 12:00 to 00:00</p>
          <p className="text-gray-600">
            Guests are required to show a photo identification and credit card
            upon check-in.
          </p>
          <p className="text-gray-600">
            {`You'll need to let the property know in advance what time you'll
            arrive.`}
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Check-out
          </h3>
          <p className="text-gray-600">Available 24 hours</p>
        </div>

        {/* Cancellation and Prepayment */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Cancellation / Prepayment
          </h3>
          <p className="text-gray-600">
            Cancellation and prepayment policies vary according to accommodation
            type. Please enter the dates of your stay and check the conditions
            of your required option.
          </p>
        </div>

        {/* Children and Beds */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Children and Beds
          </h3>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Child policies:</span> Children older
            than 12 years are welcome.
          </p>
          <p className="text-gray-600 mb-2">
            To see correct prices and occupancy information, please add the
            number of children in your group and their ages to your search.
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Cot and extra bed policies:</span>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              13+ years: Extra bed upon request ₹ 400 per person, per night
            </li>
            <li>
              Prices for extra beds are not included in the total price and will
              have to be paid for separately during your stay.
            </li>
            <li>
              The number of extra beds allowed is dependent on the option you
              choose. Please check your selected option for more information.
            </li>
            <li>There are no cots available at this property.</li>
            <li>All extra beds are subject to availability.</li>
          </ul>
        </div>

        {/* Other Rules */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Other Rules
          </h3>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">No age restriction:</span> There is no
            age requirement for check-in.
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Pets:</span> Pets are not allowed.
          </p>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Accepted Payment Methods
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>American Express</li>
            <li>Visa</li>
            <li>Mastercard</li>
            <li>Maestro</li>
            <li>Cash</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HouseRules;
