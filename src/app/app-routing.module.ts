import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OrdersComponent } from './component/orders/orders.component';
import { CartComponent } from './component/cart/cart.component';
import { SearchComponent } from './component/search/search.component';
import { FashionComponent } from './component/nav2/fashion/fashion.component';
import { ElectronicsComponent } from './component/nav2/electronics/electronics.component';
import { FurnitureComponent } from './component/nav2/furniture/furniture.component';
import { BeautyComponent } from './component/nav2/beauty/beauty.component';
import { TwowheelersComponent } from './component/nav2/twowheelers/twowheelers.component';
import { KidsComponent } from './component/kids/kids.component';
import { MenswearComponent } from './component/nav2/menswear/menswear.component';
import { WomenswearComponent } from './component/nav2/womenswear/womenswear.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"orders", component:OrdersComponent},
  {path:"cart", component:CartComponent},
  {path:"search", component:SearchComponent},
  {path:"fashion", 
    children:[
      {path:"kids", component:KidsComponent},
      {path: "menswear", component:MenswearComponent},
      {path:"womenswear", component:WomenswearComponent},      
    ],
  },
  {path:"electronics", component:ElectronicsComponent},
  {path:"furniture", component:FurnitureComponent},
  {path:"beauty", component:BeautyComponent},
  {path:"twowheelers", component:TwowheelersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
