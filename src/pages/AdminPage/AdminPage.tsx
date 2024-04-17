import React, { useEffect, useState } from "react";
import Admin from "../../components/admin/Admin";
import Password from "../../components/password/Password";

function AdminPage() {
  // const [valueAdmin, setValueAdmin] = useState("");
  return (
    <div>
      <Password />
      <Admin />
    </div>
  );
}

export default AdminPage;
