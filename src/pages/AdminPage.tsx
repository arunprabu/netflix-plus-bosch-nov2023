import {  useRef } from "react";
import { UserRole, useAuth } from "../contexts/AuthContext";

const AdminPage = () => {
  const { role } = useAuth();
  const profileNameInput = useRef<HTMLInputElement | null>(null);

  if (role !== UserRole.SuperAdmin) {
    return <p>You do not have rights to view this page. You must be a Super Admin</p>;
  }

  const handleSaveProfile = (event: React.FormEvent<HTMLButtonElement>) => {
    console.log(profileNameInput?.current?.value);
  };

  return (
    <div>
      <h1>Hello Admin!</h1>
      <p>My Profile</p>
      {/* The following is uncontrolled component */}
      <input
        type="text"
        ref={profileNameInput}
        defaultValue='John'
      />

      <button onClick={handleSaveProfile}>Save Profile</button>
    </div>
  );
};

export default AdminPage;
