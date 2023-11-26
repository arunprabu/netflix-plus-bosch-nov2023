import { useRef, useState } from "react";
import { UserRole, useAuth } from "../contexts/AuthContext";

const AdminPage = () => {
  const { role } = useAuth();

  const [profile, setProfile] = useState("john");
  const profileNameInput = useRef<HTMLInputElement | null>(null); // creating a refer to be referred in input

  if (role !== UserRole.SuperAdmin) {
    return (
      <p>You do not have rights to view this page. You must be a Super Admin</p>
    );
  }

  const handleSave = () => {
    // how to collect the form data from the input which has ref 'profileNameInput'
    console.log(profileNameInput?.current?.value);
  }

  return (
    <div>
      <h1>Hello Admin!</h1>
      <p>My Profile</p>
      {/* Controlled Component */}
      <input
        type="text"
        value={profile}
        onChange={(event) => setProfile(event.target.value)}
      />
      <br/>
      <br/>

      {/* Uncontrolled Component - May be okay for small form with 1 or 2 inputs */}
      <input type="text" ref={profileNameInput}/>
      <button onClick={handleSave}>Save</button>
      
    </div>
  );
};

export default AdminPage;
