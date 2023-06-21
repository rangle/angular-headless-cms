import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { roomData } from '../../components/rooms/rooms.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';
import { PeoplePickerComponent } from '../../components/people-picker/people-picker.component';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    FontAwesomeModule,
    DatePickerComponent,
    PeoplePickerComponent,
  ],
  templateUrl: './room-details.page.html',
})
export default class RoomDetailsPageComponent {
  faCheck = faCheck;
  private readonly route = inject(ActivatedRoute);

  readonly room$ = this.route.paramMap.pipe(
    map((params) =>
      roomData.find((room) => {
        return room.id === Number(params.get('roomId'));
      })
    )
  );
}
