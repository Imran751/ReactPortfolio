import React from "react";

const Footer = () => {
  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <p>Footer</p>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "50vh",
    backgroundColor: "#f4f4f4",
  },
  main: {
    flex: 1,
    padding: "20px",
  },
};

export default Footer;
