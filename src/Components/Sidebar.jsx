import React from "react";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
import Footer from "./Footer";
function sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cities</p>
      <Footer />
    </div>
  );
}

export default sidebar;
