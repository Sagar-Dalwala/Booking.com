import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";

const AirportTaxisFAQ = () => {
  // eslint-disable-next-line react/prop-types
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  const [open, setOpen] = useState(null);
  const handleOpen = (value) => setOpen(open === value ? null : value);

  const data = [
    {
      id: 1,
      question: "What happens if my flight is early or delayed?",
      answer:
        "Our Meet & Greet service means that if you provide your flight number when you're booking your airport taxi, we'll be able to track your flight and adjust your pick-up time automatically according to your actual arrival time. Once your flight has landed, your driver will wait for 45 minutes. This should give you plenty of time to pass through security, claim your baggage and head through to arrivals to meet your driver.",
    },
    {
      id: 2,
      question: "What's included in the price?",
      answer:
        "Our prices include all taxes, fees, gratuity and toll road charges. If you book an airport pick-up, prices also include Meet & Greet as standard, which means we'll track your flight and wait for 45 minutes from the time your flight arrives. If you book a return taxi to the airport – or any other non-airport pick-up – your driver will wait for 15 minutes after the scheduled pick-up time. Please note that you may have to pay an additional cost for certain special requests or any amendments you want to make to your journey.",
    },
    {
      id: 3,
      question: "How do I pay?",
      answer:
        "All of our private transport services are pre-paid, which means you pay online at the time of booking. Payment is secure, and we accept most major credit cards, debit cards, PayPal, and eligible rewards in your Booking.com Wallet.",
    },
    {
      id: 4,
      question: "Can I cancel my booking?",
      answer:
        "Yes. You can always cancel your booking for free up to 24 hours prior to your scheduled pick-up time. Some of our partners allow a shorter window for free cancellation. Check your booking confirmation for more information.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 font-booking">
      <div className="max-w-screen-xl mx-auto bg-white border border-gray-300 rounded-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="bg-gray-200 p-6 md:p-8 w-full lg:w-1/3 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
            <h2 className="text-xl md:text-2xl font-bold break-words">
              Find out more about our airport taxi service
            </h2>
            <p className="text-md mt-2">
              See more FAQs on our help page.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-2/3">
            {data.map((item) => (
              <Accordion
                key={item.id}
                open={open === item.id}
                icon={<Icon id={item.id} open={open} />}
                className={`${
                  open === item.id ? "border-gray-400" : "border-gray-300"
                } border-t-0 first:rounded-t-lg last:rounded-b-lg border-x-0`}
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className="text-[16px] font-semibold text-gray-800 border-b border-gray-300 px-4 py-6"
                >
                  {item.question}
                </AccordionHeader>
                <AccordionBody className="text-gray-600 px-4 py-4">
                  {item.answer}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportTaxisFAQ;
