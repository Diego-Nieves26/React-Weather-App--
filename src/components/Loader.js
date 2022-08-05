import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Loader.css";

const Loader = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="loader" id="loader">
      <button className="loader__button" onClick={() => setModal(!modal)}>
        <i className="bx bxs-right-down-arrow-circle bx-burst bx-rotate-270"></i>
      </button>
      {modal && (
        <motion.div
          className="modal"
          initial={{ scale: 0, opacity: 0, x: -100, y: -100 }}
          animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          Porfavor, premite el acceso a tu ubicacion para comenzar. Si te
          encuentras en telefono, activa la ubicacion.
        </motion.div>
      )}
      <div className="loader__content">
        <h2 className="loader__content__h2">
          Weather <br />
          App
        </h2>
        <div className="loader__animate">
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
          <span style={{ "--i": 4 }}></span>
          <span style={{ "--i": 5 }}></span>
          <span style={{ "--i": 6 }}></span>
          <span style={{ "--i": 7 }}></span>
        </div>
      </div>
      <svg
        className="loader__olas"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 40"
        preserveAspectRatio="none"
      >
        <path d="" className="loader__olas--color">
          <animate
            attributeName="d"
            begin="0s"
            dur="5s"
            repeatCount="indefinite"
            values="
                M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;
                M0,40 C200,40 400,0 600,0 C800,0 800,40 1000,40 L1000,50 L0,50 L0,40 Z;
                M0,30 C200,30 200,0 400,0 C600,0 800,40 1000,40 L1000,50 L0,50 L0,30 Z;
                M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;"
          ></animate>
        </path>
      </svg>
    </div>
  );
};

export default Loader;
