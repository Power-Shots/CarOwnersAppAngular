import CarEntity from "../models/carEntity";


export class OwnerEntity {
  constructor(public id: number,
              public firstName: string,
              public middleName: string,
              public lastName: string,
              public cars: CarEntity[]) {  }
}