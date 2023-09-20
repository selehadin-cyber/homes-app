import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { AuthGuard } from "./shared/guard/auth.guard";
import { ForgotPasswordModule } from "./forgot-password/forgot-password.module";

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
  },
  {
    path: "signin",
    loadChildren: () =>
      import("./signin/signin.module").then((m) => m.SigninModule),
    title: "Sign in"
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
    title: "Dashboard",
    canActivate: [AuthGuard]
  },
  {
    path: "forgot-password",
    loadChildren: () =>
      import("./forgot-password/forgot-password.module").then((m) => m.ForgotPasswordModule),
    title: "Forgot Password",

  }
]

export default routeConfig