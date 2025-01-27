import React from "react";

interface SidebarProps {
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedseatingCapacity: string[];
  setSelectedseatingCapacity: React.Dispatch<React.SetStateAction<string[]>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedTypes,
  setSelectedTypes,
  selectedseatingCapacity,
  setSelectedseatingCapacity,
}) => {
  const handleCheckboxChange = (
    option: string,
    _selectedOptions: string[],
    setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="w-64 p-6 bg-white">
      {/* Type Section */}
      <h3 className="mb-6 tracking-tight text-md font-semibold text-gray-400">
        T Y P E
      </h3>
      <ul>
        {[
          "Sport",
          "SUV",
          "Sedan",
          "Gasoline",
          "Electric",
          "Diesel",
          "Hybrid",
          "Hatchback",
        ].map((type) => (
          <li key={type} className="flex items-center mb-6">
            <input
              type="checkbox"
              id={type}
              checked={selectedTypes.includes(type)}
              onChange={() =>
                handleCheckboxChange(type, selectedTypes, setSelectedTypes)
              }
              className="mr-3 w-5 h-5 accent-blue"
            />
            <label
              htmlFor={type}
              className="text-xl font-semibold text-gray-500"
            >
              {type}
            </label>
          </li>
        ))}
      </ul>

      {/* Capacity Section */}
      <h3 className="mt-10 mb-6 text-md font-semibold text-gray-400">
        C A P A C I T Y
      </h3>
      <ul>
        {["2 People", "4 People", "5 People", "6 People", "7 or More"].map(
          (seatingCapacity) => (
            <li key={seatingCapacity} className="flex items-center mb-6">
              <input
                type="checkbox"
                id={seatingCapacity}
                checked={selectedseatingCapacity.includes(seatingCapacity)}
                onChange={() =>
                  handleCheckboxChange(
                    seatingCapacity,
                    selectedseatingCapacity,
                    setSelectedseatingCapacity
                  )
                }
                className="mr-3 w-5 h-5 accent-blue"
              />
              <label
                htmlFor={seatingCapacity}
                className="text-xl font-semibold text-gray-500"
              >
                {seatingCapacity}
              </label>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
