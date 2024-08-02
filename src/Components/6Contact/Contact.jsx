import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <p>Contact</p>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  main: {
    flex: 1,
    padding: "20px",
  },
};

export default Contact;
