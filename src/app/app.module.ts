import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OrdersComponent } from './component/orders/orders.component';
import { CartComponent } from './component/cart/cart.component';
import { SearchComponent } from './component/search/search.component';
import { KidsComponent } from './component/kids/kids.component';
import { Nav2Component } from './component/nav2/nav2.component';
import { FashionComponent } from './component/nav2/fashion/fashion.component';
import { ElectronicsComponent } from './component/nav2/electronics/electronics.component';
import { FurnitureComponent } from './component/nav2/furniture/furniture.component';
import { BeautyComponent } from './component/nav2/beauty/beauty.component';
import { TwowheelersComponent } from './component/nav2/twowheelers/twowheelers.component';
import { MenswearComponent } from './component/nav2/menswear/menswear.component';
import { WomenswearComponent } from './component/nav2/womenswear/womenswear.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    OrdersComponent,
    CartComponent,
    SearchComponent,
    Nav2Component,
    FashionComponent,
    ElectronicsComponent,
    FurnitureComponent,
    BeautyComponent,
    TwowheelersComponent,
    KidsComponent,
    MenswearComponent,
    WomenswearComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
