import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

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

const FrequentQuestions = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  const containerData = [
    {
      id: 1,
      question: "Why should I book a car rental in India with Booking.com?",
      answer: `We make it easy to find a rental that’ll fit your needs. Here’s what we offer:
          Huge selection of cars – from compact vehicles to SUVs
          Support in 30+ languages
          Free cancellation up to 48 hours before pick-up time on most bookings.`,
    },
    {
      id: 2,
      question: "What do I need to rent a car?",
      answer: `When you’re booking the car, you just need a debit or credit card.
          At the rental counter, you’ll need:
          Your passport
          Your voucher
          Each driver’s driving licence
          The main driver’s credit card.`,
    },
    {
      id: 3,
      question: "Am I old enough to rent a car?",
      answer:
        "Most companies will rent you a car if you’re at least 21 (and some will rent to younger drivers). But if you’re under 25, you might still have to pay a ‘young driver fee’.",
    },
    {
      id: 4,
      question: "Can I book a car for my partner, friend, colleague, etc?",
      answer:
        "Of course. Just put their details in the ‘Driver Details’ form when you’re booking the car.",
    },
    {
      id: 5,
      question: "Any tips on choosing the right car?",
      answer: `Think about where you’re going:
          An SUV might be great for cruising down a Texas freeway, but a smaller car’s probably much easier to drive in Rome.
          See what other people think. You’ll find lots of reviews and ratings on our site, so find out what other customers liked (and didn’t like) about each rental company.
          Don’t forget the gearbox. In some countries, nearly everyone drives a manual car. In others, automatics are the norm. Make sure you rent one you can drive!`,
    },
    {
      id: 6,
      question: "Is the rental price all inclusive?",
      answer: `The price you see includes:
          - The car, mandatory cover (e.g. Theft Protection and Collision Damage Waiver).
          - Fees that, if they apply, are usually payable at pick-up (e.g. one-way fees, airport surcharges, or local taxes).
          - Any extras you’ve already added (e.g. GPS or baby seats).`,
    },
  ];

  const renderAnswer = (answer) => {
    const points = answer.split("\n").filter((point) => point.trim() !== "");
    return points.length > 1 ? (
      <ul className="list-disc pl-6 text-sm text-gray-600">
        {points.map((point, index) => (
          <li key={index}>{point.trim()}</li>
        ))}
      </ul>
    ) : (
      <p className="text-sm text-gray-600">{answer}</p>
    );
  };

  // Split the data into two columns
  const column1 = containerData.slice(0, 3);
  const column2 = containerData.slice(3);

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div>
            {column1.map((item) => (
              <Accordion
                key={item.id}
                open={open === item.id}
                icon={<Icon id={item.id} open={open} />}
                className="rounded-lg"
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className="text-[16px] font-semibold"
                >
                  {item.question}
                </AccordionHeader>
                <AccordionBody className="p-4">
                  {renderAnswer(item.answer)}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
          {/* Column 2 */}
          <div>
            {column2.map((item) => (
              <Accordion
                key={item.id}
                open={open === item.id}
                icon={<Icon id={item.id} open={open} />}
                className="rounded-lg"
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className="text-[16px] font-semibold"
                >
                  {item.question}
                </AccordionHeader>
                <AccordionBody className="p-4">
                  {renderAnswer(item.answer)}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
