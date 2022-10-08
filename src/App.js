import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import { ProductLoader } from './Loaders/ProductLoader/ProductLoader';
import Main from './Main/Main';


function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
      {path:'/shop',
      loader:async()=> fetch('products.json'),
      element:<Shop></Shop>},
      { path:'/product',element:<Product></Product>},
      {path:'/about',element:<About></About>},
      {path:'/order',
      loader:ProductLoader,
      element:<Orders></Orders>},
      {path:'/home',element:<Home/>},
    ]},
   {path:'*',element:<div>Ops! page not found</div>}
  ])
 
  return (
    <div className=''>
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
