import { RouteComponentProps } from "react-router";
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
