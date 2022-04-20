import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner-profile',
  templateUrl: './banner-profile.component.html',
  styleUrls: ['./banner-profile.component.css'],
})
export class BannerProfileComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() id;
  @Input() name: String = 'Example name';
  @Input() age: String = '99';
  @Input() urlImg: String =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
  @Output() deleteProfileEvent = new EventEmitter<string>();
  deleteProfile() {
    this.deleteProfileEvent.emit(this.id);
  }

  @Output() updateProfileEvent = new EventEmitter<Object>();
  updateProfile() {
    this.updateProfileEvent.emit({
      id: this.id,
      name: this.name,
      age: this.age,
      urlImg: this.urlImg,
    });
  }
}
