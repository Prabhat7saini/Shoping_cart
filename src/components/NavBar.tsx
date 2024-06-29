
import { AppBar, Toolbar,  IconButton, Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logo from '../assets/logo.png'; 
import { useShop } from '../context/CartContext';

const NavBar = () => {
    const {products}=useShop();
  return (
   
        <AppBar position="sticky">
          <Toolbar sx={{ width: '80vw', mx: 'auto', bgcolor: 'primary.main' }}>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ marginLeft: '1rem' }}>
                <img src={logo} alt="Logo" style={{ height: '3.5rem' }} />
              </div>
            </NavLink>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
              <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                
              </NavLink>
              <NavLink to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ position: 'relative' }}>
                  <IconButton color="inherit">
                    <Badge badgeContent={products.length} color="error">
                      <AiOutlineShoppingCart style={{ fontSize: '1.5rem' }} />
                    </Badge>
                  </IconButton>
                
                </div>
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      );
  
}

export default NavBar
