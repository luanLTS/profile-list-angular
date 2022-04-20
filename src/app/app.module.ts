import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BannerProfileComponent } from './banner-profile/banner-profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, BannerProfileComponent, ProfileListComponent, ModalComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
