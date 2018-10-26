import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TestComponent } from './test/test.component';
import { RatingComponent } from './rating/rating.component';


registerLocaleData(zh);

@NgModule({
  declarations: [//这个属性只能声明组件，指令和管道
    AppComponent, ProductComponent, HomeComponent, MenuComponent, LoginComponent, CarouselComponent, TestComponent, RatingComponent
  ],
  imports: [//app这个模块所依赖的其他模块
    BrowserModule,//浏览器模块(必选模块)
    BrowserAnimationsModule,
    FormsModule,//表单处理模块
    HttpClientModule,//http服务模块
    NgZorroAntdModule.forRoot(), AppRoutingModule,ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],//模块中提供的服务
  bootstrap: [AppComponent]//模块主组件
})
export class AppModule { }
