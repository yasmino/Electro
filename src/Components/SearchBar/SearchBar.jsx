import { Box, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const SearchBar = () => {
  return (
  <Autocomplete
      id="country-select-demo"
      options={Electronics}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{
            height: "4rem",
            borderBottom: "1px solid lightGray",
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridGap: "30px",
            "& > img": { mr: 8, flexShrink: 0 },
          }}
      
          {...props}
        >
          {/* first*/}
          <Box>
            <img
              loading="lazy"
              width="20"
              height="30"
              srcSet={option.image}
              src={option.image}
              alt=""
            />
          </Box>
          {/* second */}
          <Box>{option.name}</Box>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
        id="outlined-search"
        label="search "
        type="search"
        className="searchBox"
          {...params}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};

const Electronics = [
  {
    id: 1,
    name: "Samsung Galaxy S22",
    type: "Mobile",
    prevPrice: 2000,
    price: 899.99,
    image: "https://m.media-amazon.com/images/I/81hhxPO7IIL._AC_SL1500_.jpg",
  },
  {
    id: 52,
    name: "iPad Pro 11-inch",
    type: "Tablet",
    price: 799.99,
    image:
      "https://m.media-amazon.com/images/I/81gC7frRJyL.__AC_SY445_SX342_QL70_ML2_.jpg",
  },
  {
    id: 2,
    name: "Dell XPS 13",
    type: "Laptop",
    prevPrice: 2400,
    price: 1199.99,
    image:
      "https://m.media-amazon.com/images/I/71sBltWpikL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 3,
    name: "Apple Watch Series 7",
    type: "Smartwatch",
    prevPrice: 500,
    price: 349.99,
    image:
      "https://m.media-amazon.com/images/I/51oyN0scxBL.__AC_SY445_SX342_QL70_ML2_.jpg",
  },
  {
    id: 4,
    name: "Google Pixelbook",
    type: "Laptop",
    prevPrice: 2500,
    price: 999.99,
    image:
      "https://m.media-amazon.com/images/I/81k9WUgh9uL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 5,
    name: "Sony Xperia 5 III",
    type: "Mobile",
    prevPrice: 2100,
    price: 799.99,
    image:
      "https://m.media-amazon.com/images/I/81chAemse9L.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 6,
    name: "Samsung Galaxy Watch 4",
    type: "Smartwatch",
    prevPrice: 1000,
    price: 249.99,
    image:
      "https://m.media-amazon.com/images/I/61645xE1Z5L.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 7,
    name: "iPad Pro",
    type: "Tablet",
    prevPrice: 850,
    price: 799.99,
    image:
      "https://m.media-amazon.com/images/I/61is5y-+MeL._AC_SY300_SX300_.jpg",
  },
  {
    id: 8,
    name: "HP Spectre x360",
    type: "Laptop",
    prevPrice: 2000,
    price: 1299.99,
    image:
      "https://m.media-amazon.com/images/I/716+kEr9ZdL._AC_SX300_SY300_.jpg",
  },
  {
    id: 9,
    name: "Garmin Forerunner 945",
    type: "Smartwatch",
    prevPrice: 6000,
    price: 549.99,
    image:
      "https://m.media-amazon.com/images/I/61b1Olgd+VL._AC_SY300_SX300_.jpg",
  },
  {
    id: 10,
    name: "iPad Air",
    type: "Tablet",
    prevPrice: 8000,
    price: 599.99,
    image:
      "https://m.media-amazon.com/images/I/61ULwAcGldL.__AC_SY445_SX342_QL70_ML2_.jpg",
  },
  {
    id: 11,
    name: "OnePlus 9 Pro",
    type: "Mobile",
    prevPrice: 9000,
    price: 699.99,
    image:
      "https://m.media-amazon.com/images/I/71koYhbr-3S.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 12,
    name: "Lenovo Yoga C940",
    type: "Laptop",
    prevPrice: 2300,
    price: 1099.99,
    image:
      "https://m.media-amazon.com/images/I/71t0nWRDYcL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 13,
    name: "Samsung Galaxy Watch Active 2",
    type: "Smartwatch",
    prevPrice: 500,
    price: 199.99,
    image: "https://m.media-amazon.com/images/I/61IXTK4JHWL._AC_SX679_.jpg",
  },
  {
    id: 14,
    name: "Amazon Fire HD 10",
    type: "Tablet",
    prevPrice: 300,
    price: 149.99,
    image: "https://m.media-amazon.com/images/I/81bcQZJbiJL._AC_SX679_.jpg",
  },
  {
    id: 15,
    name: "MacBook Air",
    type: "Laptop",
    prevPrice: 2300,
    price: 1299.99,
    image:
      "https://m.media-amazon.com/images/I/71uJwr1IrZL.__AC_SY445_SX342_QL70_ML2_.jpg",
  },
  {
    id: 16,
    name: "Fossil Gen 5",
    type: "Smartwatch",
    prevPrice: 400,
    price: 229.99,
    image: "https://m.media-amazon.com/images/I/51X4jhtzlEL._AC_UY879_.jpg",
  },
  {
    id: 17,
    name: "Samsung Galaxy Tab S7",
    type: "Tablet",
    prevPrice: 700,
    price: 649.99,
    image:
      "https://m.media-amazon.com/images/I/61FwTVP+KjL._AC_SX300_SY300_.jpg",
  },
  {
    id: 18,
    name: "iPhone 13",
    type: "Mobile",
    prevPrice: 2100,
    price: 799.99,
    image:
      "https://m.media-amazon.com/images/I/616dWFinzLL.__AC_SY445_SX342_QL70_ML2_.jpg",
  },
  {
    id: 19,
    name: "Asus ROG Zephyrus G14",
    type: "Laptop",
    prevPrice: 2600,
    price: 1499.99,
    image:
      "https://m.media-amazon.com/images/I/81BYe63-eJL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 20,
    name: "Huawei MatePad Pro",
    type: "Tablet",
    prevPrice: 900,
    price: 699.99,
    image:
      "https://m.media-amazon.com/images/I/51HxLMWrFML.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 21,
    name: "LG G8 ThinQ",
    type: "Mobile",
    prevPrice: 900,
    price: 599.99,
    image:
      "https://m.media-amazon.com/images/I/71ZXXayzmcL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 22,
    name: "Fitbit Versa 3",
    type: "Smartwatch",
    prevPrice: 400,
    price: 229.99,
    image:
      "https://m.media-amazon.com/images/I/61-gHEarWHL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 23,
    name: "Microsoft Surface Pro 7",
    type: "Tablet",
    price: 899.99,
    image:
      "https://m.media-amazon.com/images/I/71YaI6AXzZL.__AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    id: 24,
    name: "Xiaomi Mi 11",
    type: "Mobile",
    price: 599.99,
    image:
      "https://m.media-amazon.com/images/I/51VmzmgGbxL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 25,
    name: "Apple Watch SE",
    type: "Smartwatch",
    price: 249.99,
    image:
      "https://m.media-amazon.com/images/I/61R+kfxZlgL._AC_SX342_SY445_.jpg",
  },
  {
    id: 26,
    name: "Lenovo Tab M10",
    type: "Tablet",
    price: 199.99,
    image:
      "https://m.media-amazon.com/images/I/61bGC2AS6YL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 27,
    name: "Google Pixel 6",
    type: "Mobile",
    price: 799.99,
    image:
      "https://m.media-amazon.com/images/I/71BDUEsFd6L.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 28,
    name: "Samsung Galaxy Watch 3",
    type: "Smartwatch",
    price: 299.99,
    image:
      "https://m.media-amazon.com/images/I/51TWJqIk70L.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 29,
    name: "Acer Chromebook 14",
    type: "Laptop",
    price: 299.99,
    image:
      "https://m.media-amazon.com/images/I/9168lV2v+-L._AC_SX300_SY300_.jpg",
  },
  {
    id: 30,
    name: "iPad Mini",
    type: "Tablet",
    price: 399.99,
    image:
      "https://m.media-amazon.com/images/I/71uoSV96ToL.__AC_SY445_SX342_QL70_ML2_.jpg",
  },
  {
    id: 31,
    name: "OnePlus Nord",
    type: "Mobile",
    price: 399.99,
    image:
      "https://m.media-amazon.com/images/I/51MHXJRyEZL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 32,
    name: "Samsung Galaxy Fit 2",
    type: "Smartwatch",
    price: 49.99,
    image: "https://m.media-amazon.com/images/I/71b77JskL5L._AC_UX679_.jpg",
  },
  {
    id: 33,
    name: "Microsoft Surface Go 2",
    type: "Tablet",
    price: 499.99,
    image:
      "https://m.media-amazon.com/images/I/61XSHsnvWEL.__AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    id: 34,
    name: "Sony Xperia 1 III",
    type: "Mobile",
    price: 999.99,
    image: "https://m.media-amazon.com/images/I/71sru4kACSL._AC_SX679_.jpg",
  },
  {
    id: 35,
    name: "Garmin Venu 2",
    type: "Smartwatch",
    price: 349.99,
    image:
      "https://m.media-amazon.com/images/I/71t8XLpk-yL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 36,
    name: "Microsoft Surface Book 3",
    type: "Laptop",
    price: 1699.99,
    image:
      "https://m.media-amazon.com/images/I/61peFqUBjBL.__AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    id: 37,
    name: "Amazon Fire HD 8",
    type: "Tablet",
    price: 89.99,
    image: "https://m.media-amazon.com/images/I/610ejsdiKlL._AC_SX679_.jpg",
  },
  {
    id: 38,
    name: "Google Pixel 5a",
    type: "Mobile",
    price: 499.99,
    image:
      "https://m.media-amazon.com/images/I/51SzNrO7OWL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 39,
    name: "Huawei Watch GT 3",
    type: "Smartwatch",
    price: 199.99,
    image:
      "https://m.media-amazon.com/images/I/610F2WQGDeL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 40,
    name: "Lenovo Tab P11",
    type: "Tablet",
    price: 299.99,
    image: "https://m.media-amazon.com/images/I/51r-8poFLcL._AC_SX679_.jpg",
  },
  {
    id: 41,
    name: "LG Velvet",
    type: "Mobile",
    price: 599.99,
    image: "https://m.media-amazon.com/images/I/6115EnVW21L._AC_SX679_.jpg",
  },
  {
    id: 42,
    name: "Fitbit Charge 4",
    type: "Smartwatch",
    price: 149.99,
    image:
      "https://m.media-amazon.com/images/I/6171Y6elZAL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 43,
    name: "HP Pavilion x360",
    type: "Laptop",
    price: 899.99,
    image:
      "https://m.media-amazon.com/images/I/71JijD2CeiL.__AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    id: 44,
    name: "iPad 9th Generation",
    type: "Tablet",
    price: 329.99,
    image:
      "https://m.media-amazon.com/images/I/61zdQQORNML.__AC_SY445_SX342_QL70_ML2_.jpg",
  },
  {
    id: 45,
    name: "OnePlus 8 Pro",
    type: "Mobile",
    price: 699.99,
    image:
      "https://m.media-amazon.com/images/I/71pW4Jof1yL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 46,
    name: "Amazfit Bip U Pro",
    type: "Smartwatch",
    price: 79.99,
    image:
      "https://m.media-amazon.com/images/I/6176KxAg0wL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 47,
    name: "Dell Inspiron 14",
    type: "Laptop",
    price: 699.99,
    image:
      "https://m.media-amazon.com/images/I/715s5+Urj8L._AC_SY300_SX300_.jpg",
  },
  {
    id: 48,
    name: "Samsung Galaxy Tab A7",
    type: "Tablet",
    price: 199.99,
    image:
      "https://m.media-amazon.com/images/I/71c7bpU1wmL.__AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    id: 49,
    name: "iPhone 12",
    type: "Mobile",
    price: 799.99,
    image:
      "https://m.media-amazon.com/images/I/71IluxZN8pL.__AC_SY445_SX342_QL70_ML2_.jpg",
  },
  {
    id: 50,
    name: "Garmin Fenix 6",
    type: "Smartwatch",
    price: 499.99,
    image:
      "https://m.media-amazon.com/images/I/71PB-6kBZzL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 51,
    name: "Asus ROG Strix G",
    type: "Laptop",
    price: 1299.99,
    image:
      "https://m.media-amazon.com/images/I/71Sg57jbWfL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 53,
    name: "Sony Xperia 10 III",
    type: "Mobile",
    price: 499.99,
    image:
      "https://m.media-amazon.com/images/I/71ETvnkl7wL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 54,
    name: "Apple Watch Series 6",
    type: "Smartwatch",
    price: 399.99,
    image:
      "https://m.media-amazon.com/images/I/71iPFSKy4vL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 55,
    name: "Lenovo IdeaPad 3",
    type: "Laptop",
    price: 599.99,
    image:
      "https://m.media-amazon.com/images/I/71c+WxziRmL._AC_SY300_SX300_.jpg",
  },
  {
    id: 56,
    name: "Samsung Galaxy Tab S6",
    type: "Tablet",
    price: 599.99,
    image:
      "https://m.media-amazon.com/images/I/61YQGk05nnL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 57,
    name: "iPhone SE (2020)",
    type: "Mobile",
    price: 399.99,
    image: "https://m.media-amazon.com/images/I/612LVn6q+uL._AC_SX679_.jpg",
  },
  {
    id: 58,
    name: "Fitbit Sense",
    type: "Smartwatch",
    price: 299.99,
    image:
      "https://m.media-amazon.com/images/I/71JrJWP88RL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 59,
    name: "Microsoft Surface Laptop Go",
    type: "Laptop",
    price: 899.99,
    image:
      "https://m.media-amazon.com/images/I/61-KPeZooWL.__AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    id: 60,
    name: "Amazon Fire HD 7",
    type: "Tablet",
    price: 59.99,
    image: "https://m.media-amazon.com/images/I/51VmRP42cFL._AC_SX679_.jpg",
  },
];

export default SearchBar;
