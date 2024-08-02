import React from "react";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import History from "../components/history/History";
import Video from "../components/video/Video";
import Reservation from "../components/reservation/Reservation";
import Footer from "../components/footer/Footer";
import Delivery from "../components/delivery/Delivery";
// import Vegan from "../components/vegan/vegan";
// import Vegan from "../components/vegan/Vegan.jsx";
import Vegan from "../components/vegan/Vegan";
import Zestav from "../components/zestav/Zestav";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Vegan />
      <Zestav />
      <Delivery />
      <History />
      <Video />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Home;
