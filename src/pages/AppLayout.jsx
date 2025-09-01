import React from "react";
import Sidebar from "../Components/sidebar";
import styles from "./AppLayout.module.css";
import Map from "../Components/Map";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
export default AppLayout;
