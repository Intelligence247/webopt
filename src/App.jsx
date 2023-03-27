import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Signuppage from "./Pages/Signuppage";
import Loginpage from "./Pages/Loginpage";
import Notfound from "./Pages/Notfound";
import Forgetpassword from "./Pages/Forgetpassword";
import Setnewpassword from "./Pages/Setnewpassword";
import Successpage from "./Pages/Successpage";
import Successcreatedpage from "./Pages/Successcreatedpage";
import Checkmailpage from "./Pages/Checkmailpage";
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
      path:'/created',
      element:<Successpage/>
     },
     {
      path:'/changed',
      element:<Successcreatedpage/>,
     },
     {
      path:'/yourmail',
      element:<Checkmailpage/>,
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
