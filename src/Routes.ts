import BreweryList from "./view/BreweryList";
import { RouteComponentProps } from "react-router";
import BreweryListItem from "./view/BreweryListItem";
import Home from "./view/Home"; 


export const Routes = {
    home: {
        path: "/",
        exact: true,
        component: Home
    } as Partial<RouteComponentProps>,

    brewery: {
        path: "/:id",
        exact: true,
        component: Home
    } as Partial<RouteComponentProps>,
}
