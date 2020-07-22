import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ProductListComponent },
  { path: 'login/:name', component: LoginComponent },
  {
    path: 'list/:name',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
