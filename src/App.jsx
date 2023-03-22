import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Signuppage from "./Pages/Signuppage";
import Loginpage from "./Pages/Loginpage";
import Notfound from "./Pages/Notfound";
import Forgetpassword from "./Pages/Forgetpassword";
import Setnewpassword from "./Pages/Setnewpassword";
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
      path:"/forgetpassword",
      element:<Forgetpassword/>,
    },
    {
      path:"/setnewpassword",
      element:<Setnewpassword/>
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
