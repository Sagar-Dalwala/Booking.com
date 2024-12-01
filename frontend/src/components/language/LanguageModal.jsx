import { Button, Dialog } from "@material-tailwind/react";

const LanguageModal = ({ languageModalOpen, setLanguageModalOpen }) => {
  return (
    <Dialog
      open={languageModalOpen}
      handler={() => setLanguageModalOpen(false)}
      className="bg-white p-6 rounded-lg"
    >
      <h3 className="font-bold text-xl mb-4">Select Your Language</h3>
      <ul className="text-black">
        <li>EN - English</li>
        <li>FR - French</li>
        <li>ES - Spanish</li>
      </ul>
      <Button
        variant="text"
        className="mt-4 text-blue-900"
        onClick={() => setLanguageModalOpen(false)}
      >
        Close
      </Button>
    </Dialog>
  );
};

export default LanguageModal;
