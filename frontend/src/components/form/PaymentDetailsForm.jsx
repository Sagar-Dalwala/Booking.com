import AmericanExpressIcon from "../../../public/payment/AmericanExpressIcon";
import DiscoverIcon from "../../../public/payment/DiscoverIcon";
import MasterCardIcon from "../../../public/payment/MasterCardIcon";
import VisaIcon from "../../../public/payment/VisaIcon";
import JcbIcon from "../../../public/payment/JcbIcon";

import { CiLock } from "react-icons/ci";

const PaymentDetailsForm = () => {
  const cardIcons = [
    { americanExpressIcon: <AmericanExpressIcon /> },
    { discoverIcon: <DiscoverIcon /> },
    { masterCardIcon: <MasterCardIcon /> },
    { visaIcon: <VisaIcon /> },
    { jcbIcon: <JcbIcon /> },
  ];
  return (
    <div className="max-w-screen-md font-booking py-8">
      <h2 className="text-2xl font-bookingBold">Your payment</h2>
      <p className="text-gray-600 pb-4">simple, safe and secure</p>

      <div className="border border-gray-300 p-4 rounded">
        <p className="text-gray-600">How would you like to pay?</p>
        <div className="flex gap-4">
          {cardIcons.map((icon, index) => (
            <div key={index} className="mt-4">
              {Object.values(icon)[0]}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-5">
          <p className="text-gray-600">{`Cardholder's Name*`}</p>
          <input
            type="text"
            placeholder="John Doe"
            className="md:w-3/5 w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <p className="text-gray-600">{`Card Number*`}</p>
          <input
            type="text"
            placeholder="Card Number"
            className="md:w-3/5 w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="flex gap-6">
            <div>
              <p className="text-gray-600">{`Expiry date*`}</p>
              <input
                type="text"
                placeholder="Expiry date"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <p className="text-gray-600">{`CVV*`}</p>
              <input
                type="text"
                placeholder="CVV"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md flex gap-2">
              <CiLock className="text-2xl text-white" />
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsForm;
