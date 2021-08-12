import React from "react";
import Trek from "./components/Trek/Trek.component";
import Footer from "./components/Footer/Footer";
import Paral from "./images/trek2.jpg";

const Treks = () => {
  // const { id } = useParams();
  return (
    <>
      {/* hello trek {id} */}
      <Trek Text="Book Your Trek Now" Parallax={Paral} />
      <Footer />
    </>
  );
};

export default Treks;
