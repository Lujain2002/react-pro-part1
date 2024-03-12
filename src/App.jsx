import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Root from './routes/Root.jsx';
import Categories from './home/Categories.jsx';
import Signin from './Signin/Signin.jsx';
import Signup from './Signup/Signup.jsx';
import Products from './Products/Products.jsx';
import Cart from './Cart/Cart.jsx';
import NotFound from './NotFound/NotFound.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Categories/>
      },
      {
        path:"/signin",
        element:<Signin/>
      },{
        path:"/signup",
        element:<Signup/>
      },{
        path:"/products",
        element:<Products/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },{
        path:"/categories",
        element:<Categories/>
      },{
        path:"*",
        element:<NotFound/>
      }

    ]
  },
]);

function App() {
 

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
