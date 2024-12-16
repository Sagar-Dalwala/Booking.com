/* eslint-disable react/prop-types */
import { Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { getPropertyTypes } from "../../utils/getPropertyTypes";
import { getLocationTypes } from "../../utils/getLocationTypes";
import Input from "../../components/input/Input";
import Select from "../../components/input/Select";
import Checkbox from "../../components/input/Checkbox";
import Textarea from "../../components/input/Textarea";
import ImagesUpload from "../../components/images-upload/ImagesUpload";
import moment from "moment";
import { useEffect } from "react";
import CustomTagInput from "../input/TagInput";

const StaysForm = ({ toggleDrawer, stay, onSubmit, isLoading }) => {


  const { register, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      name: "",
      description: "",
      address: {
        street: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
      },
      availability: {
        startDate: "",
        endDate: "",
      },
      propertyType: "",
      locationType: "",
      pricePerNight: "",
      maxGuests: "",
      paymentMethod: "pay at property",
      amenities: [],
      rules: [],
      tags: [],
      featured: false,
      cancellationPolicy: false,
      currency: "INR",
    },
  });

  useEffect(() => {
    if (stay) {
      reset({
        name: stay?.name || "",
        description: stay?.description || "",
        address: {
          street: stay?.address?.street || "",
          city: stay?.address?.city || "",
          state: stay?.address?.state || "",
          country: stay?.address?.country || "",
          postalCode: stay?.address?.postalCode || "",
        },
        availability: {
          startDate: stay?.availability?.startDate
            ? moment(stay.availability.startDate).format("YYYY-MM-DD")
            : "",
          endDate: stay?.availability?.endDate
            ? moment(stay.availability.endDate).format("YYYY-MM-DD")
            : "",
        },
        propertyType: stay?.propertyType || "",
        locationType: stay?.locationType || "",
        pricePerNight: stay?.pricePerNight || "",
        maxGuests: stay?.maxGuests || "",
        paymentMethod: stay?.paymentMethod || "pay at property",
        amenities: stay?.amenities || [],
        rules: stay?.rules || [],
        tags: stay?.tags || [],
        featured: stay?.featured || false,
        cancellationPolicy: stay?.cancellationPolicy || false,
        currency: stay?.currency || "INR",
      });
    }
  }, [stay, reset]);

  const propertyTypes = getPropertyTypes();
  const locationTypes = getLocationTypes();

  return (
    <div className="space-y-6">
      <Typography variant="h5" className="font-bold">
        {stay?._id ? "Edit Your Property" : "Add New Property"}
      </Typography>
      <form
        className="space-y-4"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          name="name"
          label="Property Name"
          value={watch("name")}
          onChange={(e) => setValue("name", e.target.value)}
          {...register("name", { required: "Property name is required." })}
        />
        <Textarea
          name="description"
          label="Property Description"
          value={watch("description")}
          onChange={(e) => setValue("description", e.target.value)}
          {...register("description", {
            required: "Property description is required.",
          })}
        />
        <div className="flex gap-6">
          <Input
            type="text"
            name="address.street"
            label="Street"
            value={watch("address.street")}
            onChange={(e) => setValue("address.street", e.target.value)}
            {...register("address.street", { required: "Street is required." })}
          />
          <Input
            type="text"
            name="address.city"
            label="City"
            value={watch("address.city")}
            onChange={(e) => setValue("address.city", e.target.value)}
            {...register("address.city", { required: "City is required." })}
          />
          <Input
            type="text"
            name="address.state"
            label="State"
            value={watch("address.state")}
            onChange={(e) => setValue("address.state", e.target.value)}
            {...register("address.state", { required: "State is required." })}
          />
        </div>
        <div className="flex gap-6">
          <Input
            type="text"
            name="address.country"
            label="Country"
            value={watch("address.country")}
            onChange={(e) => setValue("address.country", e.target.value)}
            {...register("address.country", {
              required: "Country is required.",
            })}
          />
          <Input
            type="text"
            name="address.postalCode"
            label="Postal Code"
            value={watch("address.postalCode")}
            onChange={(e) => setValue("address.postalCode", e.target.value)}
            {...register("address.postalCode", {
              required: "Postal code is required.",
            })}
          />
        </div>
        <div className="flex gap-6">
          <Input
            type="date"
            name="availability.startDate"
            label="Start Date"
            value={watch("availability.startDate")}
            onChange={(e) => setValue("availability.startDate", e.target.value)}
            {...register("availability.startDate", {
              required: "Start date is required.",
            })}
          />
          <Input
            type="date"
            name="availability.endDate"
            label="End Date"
            value={watch("availability.endDate")}
            onChange={(e) => setValue("availability.endDate", e.target.value)}
            {...register("availability.endDate", {
              required: "End date is required.",
            })}
          />
        </div>
        <div className="flex gap-6">
          <Select
            label="Select Property Type"
            name="propertyType"
            options={propertyTypes}
            value={watch("propertyType")}
            onChange={(e) => setValue("propertyType", e.target.value)}
            {...register("propertyType", {
              required: "Property type is required.",
            })}
          />

          <Select
            label="Select Location Type"
            name="locationType"
            options={locationTypes}
            value={watch("locationType")}
            onChange={(e) => setValue("locationType", e.target.value)}
            {...register("locationType", {
              required: "Location type is required.",
            })}
          />
        </div>
        <div className="flex gap-6">
          <Input
            type="number"
            name="pricePerNight"
            label="Price Per Night"
            value={watch("pricePerNight")}
            onChange={(e) => setValue("pricePerNight", e.target.value)}
            {...register("pricePerNight", {
              required: "Price per night is required.",
            })}
          />

          <Input
            type="number"
            name="maxGuests"
            label="Max Guests"
            value={watch("maxGuests")}
            onChange={(e) => setValue("maxGuests", e.target.value)}
            {...register("maxGuests", { required: "Max guests is required." })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <CustomTagInput
            label="Amenities"
            tags={watch("amenities")}
            onTagsChange={(newTags) => setValue("amenities", newTags)}
            placeholder="Add an amenity and press Enter"
          />
        </div>
        <div className="flex flex-col gap-4">
          <CustomTagInput
            label="Rules"
            tags={watch("rules")}
            onTagsChange={(newTags) => setValue("rules", newTags)}
            placeholder="Add a rule and press Enter"
          />
        </div>
        <div className="flex flex-col gap-4">
          <CustomTagInput
            label="Tags"
            tags={watch("tags")}
            onTagsChange={(newTags) => setValue("tags", newTags)}
            placeholder="Add a tag and press Enter"
          />
        </div>

        <div className="flex gap-8">
          <Checkbox
            name="featured"
            label="Featured Property"
            checked={watch("featured")}
            onChange={(e) => setValue("featured", e.target.checked)}
            {...register("featured")}
          />
          <Checkbox
            name="cancellationPolicy"
            label="Has Cancellation Policy"
            checked={watch("cancellationPolicy")}
            onChange={(e) => setValue("cancellationPolicy", e.target.checked)}
            {...register("cancellationPolicy")}
          />
        </div>
        <div className="space-y-2 my-4">
          {!stay && <ImagesUpload setValue={setValue} />}
        </div>
        <div className="flex justify-start gap-4">
          <Button
            variant="outlined"
            color="red"
            className="w-28"
            onClick={toggleDrawer}
          >
            Close
          </Button>
          <Button
            variant="filled"
            color="blue"
            type="submit"
            className="w-28 flex gap-2 items-center justify-center"
          >
            {isLoading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}

            {stay ? "Update" : "Add"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StaysForm;
