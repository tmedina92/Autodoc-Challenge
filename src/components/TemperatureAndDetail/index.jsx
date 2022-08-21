import React from "react";
import { UilArrowUp, UilArrowDown } from "@iconscout/react-unicons";
import { iconUrlFromCode } from "../../services/weatherService";
import { useNavigate } from "react-router-dom";

export function TemperatureAndDetails({
  weather: { name, country, icon, temp, temp_min, temp_max, details },
}) {
  let navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-6 text-white text-3xl font-medium">
        <p>{`${name}, ${country}`}</p>
        <p className="py-6 text-xl text-cyan-300">{details}</p>
      </div>
      <div className="flex flex-row items-center justify-evenly text-white py-3">
        <p className="text-5xl">{`${temp.toFixed()}°C`}</p>
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilArrowUp />
        <p className="font-light">
          Máx:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°C`}</span>
        </p>
        <p className="font-light"> |</p>
        <UilArrowDown />
        <p className="font-light">
          Mín:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°C`}</span>
        </p>
      </div>
      <div className="flex flex-row items-center justify-center py-6 mt-8 text-white text-lg font-medium transition ease-out hover:scale-125">
        <button
          className="flex flex-row"
          onClick={() => {
            navigate("/minmax");
          }}
        >
          Mostrar mín/máx
        </button>
      </div>
    </div>
  );
}
