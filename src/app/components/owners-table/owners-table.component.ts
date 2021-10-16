import { Component, OnInit } from '@angular/core';
import { OwnerEntity } from 'src/app/models/ownerEntity';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-owners-table',
  templateUrl: './owners-table.component.html',
  styleUrls: ['./owners-table.component.scss']
})
export class OwnersTableComponent implements OnInit {
  ownersList: OwnerEntity[] = []
  selectedOwners: OwnerEntity[] = []

  constructor(private httpService: HttpService) { }

  async ngOnInit(): Promise<void> {
    await this.httpService.getOwners().subscribe(
      {
        next: (data: any) => {
          console.log(data)
          this.ownersList = data;
        },
        error: error => console.log(error)
      }
    );
  }

  selectOwner(event: Event, owner: OwnerEntity): void{
    const inputTarget = event.target as HTMLInputElement

    if(inputTarget.checked){
      this.selectedOwners = [...this.selectedOwners, owner]
    }else {
     this.selectedOwners = this.selectedOwners.filter(itemOwner => itemOwner.id !== owner.id)
    }

  }

}
