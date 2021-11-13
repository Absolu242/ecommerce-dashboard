import React, { useEffect } from "react";
import { useHistory } from "react-router";
import AdminPortal from "./Portals/admin.portal";
export default function AppBase() {
  return (
    <>
      <AdminPortal />
    </>
  );
}
