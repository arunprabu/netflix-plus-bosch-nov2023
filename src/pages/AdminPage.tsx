import { UserRole, useAuth } from "../contexts/AuthContext";

const AdminPage = () => {
  const { role } = useAuth();

  if (role !== UserRole.SuperAdmin) {
    return <p>You do not have rights to view this page. You must be a Super Admin</p>;
  }

  return <div>Admin Page</div>;
};

export default AdminPage;
