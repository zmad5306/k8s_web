import { LoginService } from './login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { LoginInterceptorService } from './login/login-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ListService } from './list/list.service';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/list', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptorService,
      multi: true
    },
    ListService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
