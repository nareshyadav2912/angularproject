import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent,FilterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
