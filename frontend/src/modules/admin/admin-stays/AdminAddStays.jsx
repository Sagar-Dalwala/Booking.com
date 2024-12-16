import { useState } from "react";
import { Drawer, Button } from "@material-tailwind/react";
import StaysForm from "../../../components/form/StaysForm";
import { useAuthContext } from "../../../context/AuthContextProvider";
import { useAddStay } from "../../../hooks/stays/useAddStay";
import toast from "react-hot-toast";
import { getCoordinates } from "../../../utils/getCoordinates.js";

const cleanArrayField = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

const AdminAddStays = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const { authUser } = useAuthContext();
  const { handleAddStay, isLoading, error } = useAddStay();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      const fullAddress = `${data.address.street.trim()}, ${data.address.city.trim()}, ${data.address.state.trim()}, ${data.address.country.trim()} ${data.address.postalCode.trim()}`;
      const location = await getCoordinates(fullAddress);

      const cleanAmenities = cleanArrayField(data.amenities);
      const cleanRules = cleanArrayField(data.rules);
      const cleanTags = cleanArrayField(data.tags);

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("propertyType", data.propertyType);
      formData.append("locationType", data.locationType);
      formData.append("pricePerNight", data.pricePerNight);
      formData.append("maxGuests", data.maxGuests);
      formData.append("paymentMethod", data.paymentMethod);
      formData.append("admin", authUser.data._id);

      formData.append("address", JSON.stringify(data.address));
      formData.append(
        "location",
        JSON.stringify({
          type: "Point",
          coordinates: [location.longitude, location.latitude],
        })
      );
      formData.append("availability", JSON.stringify(data.availability));

      // Append clean array fields
      formData.append("amenities", cleanAmenities);
      formData.append("rules", cleanRules);
      formData.append("tags", cleanTags);
      formData.append("featured", data.featured);
      formData.append("cancellationPolicy", data.cancellationPolicy);

      // Append images
      data.images.forEach((file) => {
        formData.append("images", file);
      });

      // Log FormData key-value pairs for debugging
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      // Submit the FormData to the backend
      const result = await handleAddStay(formData);

      if (error) {
        toast.error(error);
      }

      if (result) {
        toast.success("Stay successfully added");
        toggleDrawer();
        window.location.href = "/admin";
      }
    } catch (error) {
      console.error("Error while submitting:", error);
      toast.error("Failed to submit the form.");
    }
  };

  return (
    <div className="p-4 font-booking">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-gray-700 font-bookingBold">
          Properties Details
        </h1>
        <Button className="bg-secondary text-white" onClick={toggleDrawer}>
          Add Property
        </Button>
      </div>

      {/* Add Stay Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer}
        placement="right"
        size={700}
        className="p-4 overflow-y-auto"
      >
        <StaysForm
          onSubmit={onSubmit}
          toggleDrawer={toggleDrawer}
          isLoading={isLoading}
          error={error}
          formType="add"
        />
      </Drawer>
    </div>
  );
};

export default AdminAddStays;
