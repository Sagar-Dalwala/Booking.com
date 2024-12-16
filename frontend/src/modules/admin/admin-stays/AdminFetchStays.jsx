import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import AdminEditStays from "./AdminEditStays";
import AdminDeleteStays from "./AdminDeleteStays";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import { useGetStays } from "../../../hooks/stays/useGetStays";
import toast from "react-hot-toast";
import { useDeleteStay } from "../../../hooks/stays/useDeleteStay";
import { useUpdateStay } from "../../../hooks/stays/useUpdateStay";
import { getCoordinates } from "../../../utils/getCoordinates";
import { useAuthContext } from "../../../context/AuthContextProvider";
import moment from "moment";
import AdminStayDetailsModal from "../../../components/modal/AdminStayDetailsModal";
import { Tooltip, Typography } from "@material-tailwind/react";

const AdminFetchStays = () => {
  const [stays, setStays] = useState([]);
  const [selectedStay, setSelectedStay] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { getStays, isLoading, error } = useGetStays();
  const {
    deleteStay,
    isLoading: isLoadingDelete,
    error: errorDelete,
  } = useDeleteStay();

  const {
    updateStay,
    isLoading: isLoadingUpdate,
    error: errorUpdate,
  } = useUpdateStay();

  const { authUser } = useAuthContext();

  const fetchStays = async () => {
    const response = await getStays();

    if (response && Array.isArray(response.data)) {
      setStays(response.data);
    } else {
      console.error("Fetched data is not an array:", response);
    }

    if (error) {
      toast.error(error.message);
    }
  };

  //* Fetch stays on component mount
  useEffect(() => {
    fetchStays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditClick = (stay) => {
    setSelectedStay(stay);
    setEditOpen(true);
  };

  const handleNameClick = (stay) => {
    setSelectedStay(stay);
    setModalOpen(true); // Open the modal on name click
  };

  const handleSaveStay = async (data) => {
    try {
      const formData = new FormData();

      const fullAddress = `${data.address.street.trim()}, ${data.address.city.trim()}, ${data.address.state.trim()}, ${data.address.country.trim()} ${data.address.postalCode.trim()}`;
      const location = await getCoordinates(fullAddress);

      // Append each field appropriately
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("propertyType", data.propertyType);
      formData.append("locationType", data.locationType);
      formData.append("pricePerNight", data.pricePerNight);
      formData.append("maxGuests", data.maxGuests);
      formData.append("paymentMethod", data.paymentMethod);
      formData.append("admin", authUser.data._id);

      // Append nested objects like `address` and `location` as JSON strings
      formData.append("address", JSON.stringify(data.address));
      formData.append(
        "location",
        JSON.stringify({
          type: "Point",
          coordinates: [location.longitude, location.latitude],
        })
      );
      formData.append("availability", JSON.stringify(data.availability));
      formData.append("amenities", data.amenities);
      formData.append("rules", data.rules);
      formData.append("tags", data.tags);

      // Submit the FormData to the backend
      const result = await updateStay(selectedStay._id, formData);

      if (errorUpdate) {
        toast.error(error);
      }

      if (result) {
        toast.success("Stay successfully added");
        setEditOpen(false);
        fetchStays();
      }
    } catch (error) {
      console.error("Error while submitting:", error);
      toast.error("Failed to submit the form.");
    }
  };

  const handleDeleteClick = async (stay) => {
    setSelectedStay(stay);
    setDeleteOpen(true);
  };

  const handleDeleteStay = async () => {
    console.log(selectedStay._id);

    const response = await deleteStay(selectedStay._id);

    if (errorDelete) {
      toast.error(errorDelete.message);
    }

    if (response) {
      toast.success("Stay deleted successfully");
    }

    setStays((prevStays) =>
      prevStays.filter((stay) => stay._id !== selectedStay._id)
    );
    setDeleteOpen(false);
  };

  const columns = [
    { name: "No.", selector: (row, index) => index + 1, sortable: true },
    {
      name: "Name",
      selector: (row) => (
        <button className="text-secondary" onClick={() => handleNameClick(row)}>
          <Tooltip
            className="bg-gray-600"
            content={
              <div className="w-auto">
                <Typography variant="small" className="font-normal">
                  Click to view
                </Typography>
              </div>
            }
            placement="bottom"
          >
            {row.name}
          </Tooltip>
        </button>
      ),
      sortable: true,
    },
    { name: "Description", selector: (row) => row.description, sortable: true },
    { name: "Address", selector: (row) => row.address?.street, sortable: true },
    {
      name: "Availability",
      selector: (row) =>
        moment(row.availability?.startDate).format("YYYY-MM-DD"),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.pricePerNight,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex justify-center">
          <button
            className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handleEditClick(row)}
          >
            <MdOutlineEdit className="w-5 h-5" />
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handleDeleteClick(row)}
          >
            <MdOutlineDelete className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900" />
        </div>
      )}
      {!isLoading && (
        <div className="p-4">
          <DataTable
            columns={columns}
            data={stays}
            pagination
            highlightOnHover
            striped
            responsive
            pointerOnHover
            customStyles={{
              headRow: {
                style: {
                  backgroundColor: "#1d4ed8",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.5em",
                  textAlign: "center",
                  padding: "8px",
                },
              },
              cells: {
                style: {
                  padding: "8px",
                  textAlign: "center",
                  fontSize: "1.2em",
                },
              },
              headCells: {
                style: {
                  padding: "8px",
                },
              },
              rows: {
                style: {
                  backgroundColor: "#f9f9f9",
                },
              },
            }}
            className="shadow-md rounded-lg"
          />

          <AdminEditStays
            stay={selectedStay}
            open={editOpen}
            onClose={() => setEditOpen(false)}
            onSubmit={handleSaveStay}
            isLoading={isLoadingUpdate}
          />

          <AdminDeleteStays
            open={deleteOpen}
            onClose={() => setDeleteOpen(false)}
            onDelete={handleDeleteStay}
            stayName={selectedStay?.name}
            isLoading={isLoadingDelete}
          />
        </div>
      )}
      <AdminStayDetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        stay={selectedStay}
      />
    </>
  );
};

export default AdminFetchStays;
