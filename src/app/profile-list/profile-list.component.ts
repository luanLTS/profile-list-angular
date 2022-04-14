import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  visibleForm: boolean = false;

  profileName: String;
  profileAge: String;
  profileImage: String;

  profiles = [
    {
      id: this.generateUUID(),
      name: 'João',
      age: '20',
      urlImg:
        'https://cdn.pixabay.com/photo/2022/03/10/13/59/astronaut-7059915__340.png',
    },
    {
      id: this.generateUUID(),
      name: 'Maria',
      age: '24',
      urlImg:
        'https://cdn.pixabay.com/photo/2022/04/02/14/22/the-great-wave-off-kanagawa-7107112__340.png',
    },
    {
      id: this.generateUUID(),
      name: 'Marcos',
      age: '40',
      urlImg:
        'https://cdn.pixabay.com/photo/2022/04/09/19/02/moon-7122089__340.png',
    },
    {
      id: this.generateUUID(),
      name: 'Francisco',
      age: '82',
      urlImg:
        'https://cdn.pixabay.com/photo/2022/02/20/09/46/lama-7024125__340.jpg',
    },
  ];

  addProfile() {}
  removeProfile() {}
  generateUUID() {
    console.log('UUID Gerado ' + Math.floor(Math.random() * 9999) + 1);
    return Math.floor(Math.random() * 9999) + 1;
  }
  showForm = () => {
    this.visibleForm = !this.visibleForm;
  };
}
