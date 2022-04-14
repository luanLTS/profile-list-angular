import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { BannerProfileComponent } from './banner-profile/banner-profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

@NgModule({
  declarations: [AppComponent, BannerProfileComponent, ProfileListComponent],
  imports: [BrowserModule, NgModel],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
