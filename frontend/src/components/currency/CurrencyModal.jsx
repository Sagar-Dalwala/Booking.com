import { Button, Dialog } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const CurrencyModal = ({ currencyModalOpen, setCurrencyModalOpen }) => {
  return (
    <Dialog
      open={currencyModalOpen}
      handler={() => setCurrencyModalOpen(false)}
      className="bg-white p-6 rounded-lg"
    >
      <h3 className="font-bold text-xl mb-4">Select Your Currency</h3>
      <ul className="text-black">
        <li>USD - US Dollar</li>
        <li>INR - Indian Rupee</li>
        <li>EUR - Euro</li>
      </ul>
      <Button
        variant="text"
        className="mt-4 text-blue-900"
        onClick={() => setCurrencyModalOpen(false)}
      >
        Close
      </Button>
    </Dialog>
  );
};

export default CurrencyModal;
