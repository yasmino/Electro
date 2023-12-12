import { useContext, useEffect} from "react";
import { WishlistContext } from './WishlistProvider';
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import './wishlist.css'

const Wishlist = () => {
    const {handleRemove, electronics} = useContext(WishlistContext);

  return (
<Container maxWidth="lg" sx={{height: '100vh' }}>
  <TableContainer>
      <Table aria-label="simple table">
        <TableHead className="wishlist-thead">
          <TableRow>
            <TableCell>Product image</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {electronics.map(product =>
                 product.wishlist === true ? 
            <TableRow key={product.id} className="product-row"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
              <TableCell component="th" scope="row" className="fav-product-image">
              <img src={product.image} className="thumbnail"/>
              </TableCell>
              <TableCell component="th" scope="row">
              {product.name} 
              </TableCell>
              <TableCell component="th" scope="row">
             {product.price}
              </TableCell>
              <TableCell component="th" scope="row">
             <button className="remove-btn" onClick={() => {
                handleRemove(product.id);
              }}>
                <DeleteIcon/>
                </button>
              </TableCell>
            </TableRow>
                  : null
                  )}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default Wishlist
