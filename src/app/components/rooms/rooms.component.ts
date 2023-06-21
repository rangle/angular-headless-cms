import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faWifi,
  faCoffee,
  faBath,
  faParking,
  faSwimmingPool,
  faHotdog,
  faStopwatch,
  faCocktail,
} from '@fortawesome/free-solid-svg-icons';
import { RoomComponent } from '../room/room.component';

const roomData = [
  {
    id: 1,
    name: 'Superior Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: faWifi },
      { name: 'Coffee', icon: faCoffee },
      { name: 'Bath', icon: faBath },
      { name: 'Parking Space', icon: faParking },
      { name: 'Swimming Pool', icon: faSwimmingPool },
      { name: 'Breakfast', icon: faHotdog },
      { name: 'GYM', icon: faStopwatch },
      { name: 'Drinks', icon: faCocktail },
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: 'rooms/1.png',
    imageLg: 'rooms/1-lg.png',
  },
  {
    id: 2,
    name: 'Signature Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: faWifi },
      { name: 'Coffee', icon: faCoffee },
      { name: 'Bath', icon: faBath },
      { name: 'Parking Space', icon: faParking },
      { name: 'Swimming Pool', icon: faSwimmingPool },
      { name: 'Breakfast', icon: faHotdog },
      { name: 'GYM', icon: faStopwatch },
      { name: 'Drinks', icon: faCocktail },
    ],
    size: 70,
    maxPerson: 2,
    price: 220,
    image: 'rooms/2.png',
    imageLg: 'rooms/2-lg.png',
  },
  {
    id: 3,
    name: 'Deluxe Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: faWifi },
      { name: 'Coffee', icon: faCoffee },
      { name: 'Bath', icon: faBath },
      { name: 'Parking Space', icon: faParking },
      { name: 'Swimming Pool', icon: faSwimmingPool },
      { name: 'Breakfast', icon: faHotdog },
      { name: 'GYM', icon: faStopwatch },
      { name: 'Drinks', icon: faCocktail },
    ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: 'rooms/3.png',
    imageLg: 'rooms/3-lg.png',
  },
  {
    id: 4,
    name: 'Luxury Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: faWifi },
      { name: 'Coffee', icon: faCoffee },
      { name: 'Bath', icon: faBath },
      { name: 'Parking Space', icon: faParking },
      { name: 'Swimming Pool', icon: faSwimmingPool },
      { name: 'Breakfast', icon: faHotdog },
      { name: 'GYM', icon: faStopwatch },
      { name: 'Drinks', icon: faCocktail },
    ],
    size: 50,
    maxPerson: 4,
    price: 289,
    image: 'rooms/4.png',
    imageLg: 'rooms/4-lg.png',
  },
  {
    id: 5,
    name: 'Luxury Suite Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: faWifi },
      { name: 'Coffee', icon: faCoffee },
      { name: 'Bath', icon: faBath },
      { name: 'Parking Space', icon: faParking },
      { name: 'Swimming Pool', icon: faSwimmingPool },
      { name: 'Breakfast', icon: faHotdog },
      { name: 'GYM', icon: faStopwatch },
      { name: 'Drinks', icon: faCocktail },
    ],
    size: 90,
    maxPerson: 5,
    price: 320,
    image: 'rooms/5.png',
    imageLg: 'rooms/5-lg.png',
  },
  {
    id: 6,
    name: 'Deluxe Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: faWifi },
      { name: 'Coffee', icon: faCoffee },
      { name: 'Bath', icon: faBath },
      { name: 'Parking Space', icon: faParking },
      { name: 'Swimming Pool', icon: faSwimmingPool },
      { name: 'Breakfast', icon: faHotdog },
      { name: 'GYM', icon: faStopwatch },
      { name: 'Drinks', icon: faCocktail },
    ],
    size: 45,
    maxPerson: 6,
    price: 344,
    image: 'rooms/6.png',
    imageLg: 'rooms/6-lg.png',
  },
  {
    id: 7,
    name: 'Luxury Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea ccusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: faWifi },
      { name: 'Coffee', icon: faCoffee },
      { name: 'Bath', icon: faBath },
      { name: 'Parking Space', icon: faParking },
      { name: 'Swimming Pool', icon: faSwimmingPool },
      { name: 'Breakfast', icon: faHotdog },
      { name: 'GYM', icon: faStopwatch },
      { name: 'Drinks', icon: faCocktail },
    ],
    size: 84,
    maxPerson: 7,
    price: 389,
    image: 'rooms/7.png',
    imageLg: 'rooms/7-lg.png',
  },
  {
    id: 8,
    name: 'Deluxe Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: faWifi },
      { name: 'Coffee', icon: faCoffee },
      { name: 'Bath', icon: faBath },
      { name: 'Parking Space', icon: faParking },
      { name: 'Swimming Pool', icon: faSwimmingPool },
      { name: 'Breakfast', icon: faHotdog },
      { name: 'GYM', icon: faStopwatch },
      { name: 'Drinks', icon: faCocktail },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: 'rooms/8.png',
    imageLg: 'rooms/8-lg.png',
  },
];

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RoomComponent],
  templateUrl: './rooms.component.html',
})
export class RoomsComponent {
  rooms = roomData;
}
