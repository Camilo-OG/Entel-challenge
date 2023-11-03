import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Form from "../views/form"
import Error404 from "../views/Error404"
import FormList from "../views/formList"


export default function MyRoutes() {
  const router = createBrowserRouter([
    {
      path: '/' ,
      element: <Form/>,
      errorElement: <Error404/>,
    },
    {
      path: '/list' ,
      element: <FormList/>,
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}
