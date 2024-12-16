/* eslint-disable react/prop-types */

import { Button, Card, CardBody, Dialog, Typography } from "@material-tailwind/react";


const AdminStayDetailsModal = ({ open, onClose, stay }) => {
  if (!stay) return null;

  return (
    <Dialog open={open} handler={onClose} >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h4" className="font-bold text-blue-600">
            {stay?.name}
          </Typography>
          <Button variant="text" color="red" onClick={onClose}>
            Close
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <Typography variant="h6" className="font-bold">
              Description
            </Typography>
            <Typography>{stay?.description}</Typography>
          </div>

          <div>
            <Typography variant="h6" className="font-bold">
              Address
            </Typography>
            <Typography>{`${stay?.address?.street}, ${stay?.address?.city}, ${stay?.address?.state}, ${stay?.address?.country}, ${stay?.address?.postalCode}`}</Typography>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <Typography variant="h6" className="font-bold">
              Price per Night
            </Typography>
            <Typography>${stay?.pricePerNight}</Typography>
          </div>

          <div>
            <Typography variant="h6" className="font-bold">
              Max Guests
            </Typography>
            <Typography>{stay?.maxGuests}</Typography>
          </div>
        </div>

        <div className="mb-4">
          <Typography variant="h6" className="font-bold">
            Amenities
          </Typography>
          <ul className="list-disc pl-5">
            {stay?.amenities?.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <Typography variant="h6" className="font-bold">
            Property Type
          </Typography>
          <Typography>{stay?.propertyType}</Typography>
        </div>

        <div className="mb-4">
          <Typography variant="h6" className="font-bold">
            Location Type
          </Typography>
          <Typography>{stay?.locationType}</Typography>
        </div>

        <div className="mb-4">
          <Typography variant="h6" className="font-bold">
            Rules
          </Typography>
          <ul className="list-disc pl-5">
            {stay?.rules?.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <Typography variant="h6" className="font-bold">
            Tags
          </Typography>
          <div className="flex flex-wrap">
            {stay?.tags?.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <Typography variant="h6" className="font-bold">
            Images
          </Typography>
          <div className="flex overflow-x-auto">
            {stay?.images?.map((image, index) => (
              <Card key={index} className="mr-4" style={{ maxWidth: "250px" }}>
                <CardBody>
                  <img src={image} alt={`Image ${index + 1}`} />
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AdminStayDetailsModal;
