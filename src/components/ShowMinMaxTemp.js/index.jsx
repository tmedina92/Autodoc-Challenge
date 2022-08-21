import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function ShowMinMaxTemp() {
  const [min, setMin] = useState({});
  const [max, setMax] = useState({});

  let navigate = useNavigate();
  const temperatures = useSelector((state) => state.temperatures);

  useEffect(() => {
    if (temperatures.length > 0) {
      setMin(getMin());
      setMax(getMax());
      console.log(temperatures);
    }
  }, []);

  const getMin = () => {
    const min = temperatures.reduce((p, v) => {
      return p.temp_min < v.temp_min ? p : v;
    });
    return min;
  };

  const getMax = () => {
    const max = temperatures.reduce((p, v) => {
      return p.temp_max > v.temp_max ? p : v;
    });
    return max;
  };

  return (
    min &&
    max && (
      <div>
        <div className="flex flex-col items-center justify-start py-10 text-white text-3xl font-medium">
          <p className="py-2">{`A mínima de ${
            min.city
          } é ${min.temp_min?.toFixed()}°C`}</p>
          <p className="py-2">{`A máxima de ${
            max.city
          } é ${max.temp_max?.toFixed()}°C`}</p>
        </div>
        <div className="flex align-center justify-center ">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="flex flex-row align-center  text-white text-lg font-medium transition ease-out hover:scale-125"
          >
            Voltar
          </button>
        </div>
      </div>
    )
  );
}
