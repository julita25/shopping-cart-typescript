const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div style={{ background: "#C0EEE4" }}>
        <img
          src="/images/grocery-bg.jpg"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            top: "10px",
            left: "10px",
            fontSize: "25px"
          }}>
          Start your online order now!</div>
      </div>
    </>
  )
};

export default Home;