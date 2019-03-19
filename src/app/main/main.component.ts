import {Component} from '@angular/core';
import {ListingService} from '../services/listing.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public listings$ = this.listingService.getListings();
  public test$ = this.listings$.pipe(
    map(value => value[0])
  );

  constructor(private listingService: ListingService) {
  }
}
