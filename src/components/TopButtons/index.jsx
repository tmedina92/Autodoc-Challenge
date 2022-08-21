import React from "react";

export function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Sydney",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "Toronto",
    },
    {
      id: 5,
      name: "Paris",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 ">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => setQuery({ q: city.name })}
          className="text-white text-lg font-medium transition ease-out hover:scale-125"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}
