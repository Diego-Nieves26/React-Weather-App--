import { useState } from "react";
import useBringApi from "../hooks/useBringApi";
import { motion } from "framer-motion";

const Information = () => {
  //Degrees Cº/Fº
  const [celsiusDegrees, setCelsiusDegrees] = useState(true);
  const changeGrade = () => setCelsiusDegrees(!celsiusDegrees);

  //Api
  const { dataApi } = useBringApi();

  return (
    <motion.div
      className="information"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      }}
    >
      <h1 className="information__title">Wheather App</h1>
      <section className="information__box">
        <h2 className="information__box__h2">
          {dataApi.location?.name + " " + dataApi.location?.region}
        </h2>
        <h2 className="information__box__h2">{dataApi.location?.country}</h2>
        <div className="information__content">
          <img src={dataApi.current?.condition.icon} alt="Img" />
          <h3>
            {celsiusDegrees
              ? dataApi.current?.temp_c + "ºC"
              : dataApi.current.temp_f + "ºF"}
            <br />
            {dataApi.current?.condition.text}
          </h3>
        </div>
        <ul>
          <li>
            <span>"{dataApi.location?.localtime}"</span>
          </li>
          <li>
            <span>Humidity: </span>
            {dataApi.current?.humidity} m/s
          </li>
          <li>
            <span>Clouds: </span>
            {dataApi.current?.cloud}%
          </li>
          <li>
            <span>Gust: </span>
            {dataApi.current?.gust_mph} mb
          </li>
        </ul>
        <motion.button
          className="information__button"
          onClick={changeGrade}
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.9,
            rotate: 5,
            borderRadius: "30px",
          }}
        >
          Degrees ºF/ºC
        </motion.button>
      </section>
    </motion.div>
  );
};

export default Information;
