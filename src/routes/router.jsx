import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import RootView from "../pages/RootView";
import ViewItems from "../pages/Items/ViewItems";
import ListItems from "../pages/Items/ListItems";
import CreateItem from "../pages/Items/CreateItem";
import DetailsItem from "../pages/Items/DetailsItem";
import UpdateItem from "../pages/Items/UpdateItem";

const router = createBrowserRouter([{
  path: "/",
  element: <RootView />,
  children: [
    {index: true, element: <Home />},
    {
      path: "items",
      element: <ViewItems />,
      children: [
        {index: true, element: <ListItems />},
        {path: 'new', element: <CreateItem />},
        {path: ':id', element: <DetailsItem />},
        {path: ':id/update', element: <UpdateItem />}
      ]
    }
  ]
}])

export default router;