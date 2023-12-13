import { Box, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70px",
        }}
      >
        <TextField
          id="outlined-search"
          label="Search "
          type="search"
          className="searchBox"
          sx={{ width: "350px" }}
        />
      </Box>
    </div>
  );
};

export default SearchBar;
