
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter , Routes,Route} from "react-router-dom"
import DashBoard from './pages/DashBoard'
import LogIn from './pages/LogIn'
import RestPassword from './pages/RestPassword'
import ForgotPassword from './pages/ForgotPassword'
import MainLayout from './components/MainLayout'
//  import Enquires from './pages/Enquires';
import Enquires from './pages/Enquires';
import BlogList from './pages/BlogList';
import BlogCartList from './pages/BlogCartList';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import CategoryList from './pages/CategoryList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import AddBlog from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddColor from './pages/AddColor';
import AddCat from './pages/AddCat';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';



function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LogIn/>}></Route>
      <Route path='/reset-password' element={<RestPassword/>}></Route>
      <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
       <Route path='/admin' element={<MainLayout/>}>
        <Route index element={<DashBoard/>}></Route>
        <Route path='enquires' element={<Enquires/>}/>
        <Route path='blog' element={<AddBlog/>}/>
        <Route path='blog-list' element={<BlogList/>}/>
        <Route path='blog-category' element={<AddBlogCat/>}/>
        <Route path='blog-category-list' element={<BlogCartList/>}/>
        <Route path='orders' element={<Orders/>}/>
        <Route path='customers' element={<Customers/>}/>
        <Route path='color' element={<AddColor/>}/>
        <Route path='list-color' element={<ColorList/>}/>
        <Route path='category' element={<AddCat/>}/>
        <Route path='list-category' element={<CategoryList/>}/>
        <Route path='brand' element={<AddBrand/>}/>
        <Route path='list-brand' element={<BrandList/>}/>
        <Route path='Product' element={<AddProduct/>}/>
        <Route path='Product-list' element={<ProductList/>}/>
        
      </Route> 
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
