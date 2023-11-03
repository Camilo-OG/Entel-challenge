import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Form from "../views/form"
import Error404 from "../views/Error404"
import Home from "../views/home"
import FormList from "../views/formList"


export default function MyRoutes() {
  const router = createBrowserRouter([
    {
      path: '/' ,
      element: <Home/>,
      errorElement: <Error404/>,
      children: [
        {
          path: '/form' ,
          element: <Form/>,
        },
        {
          path: '/list' ,
          element: <FormList/>,
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}
