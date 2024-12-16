import AdminAddStays from "../../../modules/admin/admin-stays/AdminAddStays";
import AdminFetchStays from "../../../modules/admin/admin-stays/AdminFetchStays";

const AdminStays = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6">
      <AdminAddStays />
      <AdminFetchStays />
    </div>
  );
};

export default AdminStays;
