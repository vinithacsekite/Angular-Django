import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CardComponent } from '../card/card.component';
import { RatingsComponent } from '../ratings/ratings.component';
import { RouterOutlet } from '@angular/router';

/**
 * Interface representing a Section (ISP).
 */
export interface Section {
  name: string;
  lowest_price: number;
  rating: number;
  max_speed: number;
  description: string;
  contact_no: string;
  email: string;
  image: string;
  url: string;
}

/**
 * HomeComponent - Main component for displaying ISP information.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CardComponent,
    FormsModule,
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    RatingsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Angular17';
  selectedISP: Section | null = null;
  ISPs: Section[] = [];
  filteredISPs: Section[] = [];
  searchName: string = '';
  isReadonly: boolean = true;
  sortCriteria: string = 'price'; // Default sort criteria

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchISPs(); 
  }

  /**
   * Fetches the list of ISPs from the server.
   */
  fetchISPs() {
    this.http.get<Section[]>('http://127.0.0.1:8000/isps/').subscribe(
      (data: Section[]) => {
        this.ISPs = data;
        this.filteredISPs = data; // Initialize filtered ISPs with fetched data
      },
      (error) => {
        console.error('Failed to fetch ISPs:', error);
      }
    );
  }

  /**
   * Filters the ISPs based on the search field.
   */
  private filterByName(): void {
    const lowerSearchData = this.searchName.toLowerCase();
    this.filteredISPs = this.ISPs.filter(ISP =>
      ISP.name.toLowerCase().includes(lowerSearchData) ||
      ISP.lowest_price.toString().includes(lowerSearchData) ||
      ISP.rating.toString().includes(lowerSearchData)
    );
  }

  /**
   * Called whenever the search criteria changes to filter the ISPs.
   */
  onSearchChange() {
    this.filterByName();
  }

  /**
   * Handles the button click event to select an ISP.
   * 
   * @param ISP - The selected ISP.
   */
  onButtonClick(ISP: Section) {
    this.selectedISP = ISP;
  }

  /**
   * Sorts the filtered ISPs based on the provided criteria.
   * 
   * @param sortBy - The criteria to sort by (e.g., 'price', 'rating').
   */
  sortFilteredISPs(sortBy: string) {
    if (sortBy === 'price') {
      this.filteredISPs.sort((a, b) => a.lowest_price - b.lowest_price);
    } else if (sortBy === 'rating') {
      this.filteredISPs.sort((a, b) => b.rating - a.rating);
    }
  }
}
