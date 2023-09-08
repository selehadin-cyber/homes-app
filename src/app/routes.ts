import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Home page"
    },
    {
    path: "details/:id",
    loadChildren: () =>
      import("./details/details.module").then((m) => m.DetailsModule),
    title: "Details page"
  }
]

export default routeConfig