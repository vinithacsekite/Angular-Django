import { Component, NgModule,Input } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [NgbRatingModule,],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css',
  providers: [NgbRatingConfig],
})
export class RatingsComponent {
  @Input() selected: number = 0;
  hovered = 0;
  @Input() readonly:boolean = false;
	
}
