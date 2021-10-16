import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OwnerEntity } from '../models/ownerEntity';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  private ownersURL = 'api/owners';

   getOwners(): Observable<OwnerEntity[]> {
    return this.http.get(this.ownersURL).pipe(
      map((data: any) => {
        console.log(data)
        let ownersList = data;
        return ownersList.map(function(owner: any): OwnerEntity {
          return new OwnerEntity(owner.id, owner.firstName, owner.middleName, owner.lastName, owner.cars);
        });
      }),
      catchError(error => {
        console.log('Error from service: ', error);
        return throwError(error);
      })
    );
  }

  postOwnser(ownersList: OwnerEntity[]) {
    
  }
}
