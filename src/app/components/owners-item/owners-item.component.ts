import { Component, Input, OnInit } from '@angular/core';
import { OwnerEntity } from 'src/app/models/ownerEntity';

@Component({
  selector: 'app-owners-item',
  templateUrl: './owners-item.component.html',
  styleUrls: ['./owners-item.component.scss']
})
export class OwnersItemComponent implements OnInit {
  @Input() owner: OwnerEntity = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    cars: []
  }
  @Input() carsCount: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
