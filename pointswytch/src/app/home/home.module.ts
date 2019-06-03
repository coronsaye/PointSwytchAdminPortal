import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)

  ]
})
export class HomeModule { }
