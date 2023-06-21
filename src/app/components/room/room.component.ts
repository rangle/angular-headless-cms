import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMaximize, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './room.component.html',
})
export class RoomComponent {
  faMaximize = faMaximize;
  faPeopleGroup = faPeopleGroup;
  @Input() room = {
    id: 0,
    name: '',
    description: '',
    facilities: [
      {
        name: '',
        icon: faMaximize,
      },
    ],
    size: 0,
    maxPerson: 0,
    price: 0,
    image: '',
    imageLg: '',
  };
}
