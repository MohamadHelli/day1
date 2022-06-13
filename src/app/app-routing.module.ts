import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CotnactComponent } from './cotnact/cotnact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{
  path: "", component: HomePageComponent,
},{
  path:"about", component:AboutComponent,
},{
  path:"contact", component:CotnactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
