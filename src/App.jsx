import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Signuppage from "./Pages/Signuppage";
import Loginpage from "./Pages/Loginpage";
import Notfound from "./Pages/Notfound";
function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Homepage/>,
    },
    {
      path:"/signuppage",
      element:<Signuppage/>
    },
    {
      path:"/loginpage",
      element:<Loginpage/>,
    },
    {
      path:"*",
      element:<Notfound/>
    },
   
  ])
  return (
   <RouterProvider router={routes}/>
  )
}

export default App;
