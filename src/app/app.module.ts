// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


//components
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { OwnersTableComponent } from './components/owners-table/owners-table.component';
import { OwnersPageComponent } from './Pages/owners-page/owners-page.component';
import { OwnersItemComponent } from './components/owners-item/owners-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OwnersTableComponent,
    OwnersPageComponent,
    OwnersItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    //pleace remove this when real api will be ready
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
