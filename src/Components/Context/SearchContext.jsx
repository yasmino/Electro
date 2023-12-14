import { createContext, useState } from "react";

export const SearchContext = createContext({});

// eslint-disable-next-line react/prop-types
const SearchContextProvider = ({ children }) => {
  const [input, setInput] = useState("");

  // fetch Data in search Bar
  const fetchData = async (value) => {
    const response = await fetch("../../../Data/db.json");
    const electroData = await response.json();
    const Electronics = electroData.Electronics;
    const result = Electronics.filter((electro) => {
      return (
        value &&
        electro &&
        electro.name &&
        electro.name.toLowerCase().includes(value)
      );
    });
    console.log(result);
  };

  // get data from search input
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const processElectronicItems = (electronicItems) => {
    return electronicItems.map((item) => {
      const { name, image, price } = item;
      return { name, image, price };
    });
  };

  return (
    <SearchContext.Provider
      value={{
        input,
        setInput,
        handleChange,
        processElectronicItems,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
