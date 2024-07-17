import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchValue:string='';

  @Output()
  searchChanged:EventEmitter<string>=new EventEmitter<string>();

  onSearch(){
    this.searchChanged.emit(this.searchValue);
  }

}
