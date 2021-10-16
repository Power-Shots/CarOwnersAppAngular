import { Injectable } from '@angular/core';
import { InMemoryDbService, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { OwnerEntity } from '../models/ownerEntity';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  //data base
  ownersList: OwnerEntity[] = [
    {id: 1, firstName: 'Василий', middleName:'Иванович', lastName: 'Зубов', cars: [
      {id: 1, brand: 'VAZ', model: '2110', year: '2007', licensePlateNumber: 'AX1111НА'}
    ]},
    {id: 2, firstName: 'Мария', middleName:'Дмитреевна', lastName: 'Лемова', cars: [
      {id: 1, brand: 'Mazda', model: 'RX8', year: '2005', licensePlateNumber: 'AН2858НА'},
      {id: 1, brand: 'Toyota', model: 'Land Cruiser 300', year: '2005', licensePlateNumber: 'AН2857НА'},
    ]}
  ]
  createDb(){
    const owners: OwnerEntity[] = this.ownersList
    return  {owners} ;
  }

  constructor() { }
}
