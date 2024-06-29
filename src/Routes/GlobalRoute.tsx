import { BrowserRouter ,Routes,Route} from 'react-router-dom'

import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import Cart from '../pages/Cart'


const GlobalRoute = () => {
    return (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route  path="/products" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      )
}

export default GlobalRoute

