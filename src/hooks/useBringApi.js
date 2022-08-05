import axios from "axios";
import { useEffect, useState } from "react";

const useBringApi = () => {
  const [dataApi, setDataApi] = useState({});

  useEffect(() => {
    function success(pos) {
      var crd = pos.coords;
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=5db0b8f0930d42bd8a2205054221706&q=${crd.latitude},${crd.longitude}&aqi=no`
        )
        .then((res) => {
          setDataApi(res.data);
        });
      document.getElementById("loader").classList.toggle("loader__hidden");
    }
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return { dataApi };
};

export default useBringApi;
