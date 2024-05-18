import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { RatingsComponent } from './components/ratings/ratings.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'head', component:HeaderComponent},
    {path: 'card', component:CardComponent},
    {path: 'ratings', component:RatingsComponent},
    {path: '', component:HomeComponent},

];
