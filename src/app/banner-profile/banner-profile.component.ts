import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-profile',
  templateUrl: './banner-profile.component.html',
  styleUrls: ['./banner-profile.component.css'],
})
export class BannerProfileComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() name: String = 'Example name';
  @Input() age: String = '99';
  @Input() urlImg: String =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
}
