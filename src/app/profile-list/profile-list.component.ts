import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnInit(): void {
    this.profiles = [
      {
        id: this.generateID(),
        name: 'João',
        age: '20',
        urlImg:
          'https://cdn.pixabay.com/photo/2022/03/10/13/59/astronaut-7059915__340.png',
      },
      {
        id: this.generateID(),
        name: 'Maria',
        age: '24',
        urlImg:
          'https://cdn.pixabay.com/photo/2022/04/02/14/22/the-great-wave-off-kanagawa-7107112__340.png',
      },
      {
        id: this.generateID(),
        name: 'Marcos',
        age: '40',
        urlImg:
          'https://cdn.pixabay.com/photo/2022/04/09/19/02/moon-7122089__340.png',
      },
      {
        id: this.generateID(),
        name: 'Francisco',
        age: '82',
        urlImg:
          'https://cdn.pixabay.com/photo/2022/02/20/09/46/lama-7024125__340.jpg',
      },
    ];
  }

  ngOnChanges(): void {}

  visibleForm: boolean = false;
  visibleModal: boolean = false;
  profile = {
    id: 0,
    name: '',
    age: '',
    urlImg: '',
  };

  profileName: String;
  profileAge: String;
  profileImage: String;

  profiles = [];

  private idInit = 0;

  addProfile() {
    this.profile.id = this.generateID();
    this.profiles.push(this.profile);
    this.profile = {
      id: 0,
      name: '',
      age: '',
      urlImg: '',
    };
    this.visibleForm = false;
  }
  removeProfile(event: string) {
    this.profiles = this.profiles.filter((prof) => prof.id !== parseInt(event));
  }

  dataUpdateProfile(event) {
    this.visibleModal = true;
    this.profile['id'] = event.id;
    this.profile['name'] = event.name;
    this.profile['age'] = event.age;
    this.profile['urlImg'] = event.urlImg;
  }

  updateProfile() {
    this.profiles.forEach((profile) => {
      if (profile.id === this.profile.id) {
        profile.name = this.profile.name;
        profile.age = this.profile.age;
        profile.urlImg = this.profile.urlImg;
      }
    });
    this.visibleModal = false;
    this.profile = {
      id: 0,
      name: '',
      age: '',
      urlImg: '',
    };
  }

  generateID() {
    return ++this.idInit;
  }
  showForm = () => {
    this.visibleForm = !this.visibleForm;
  };
}
