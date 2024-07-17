import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() all:number=0;
  @Input() telugu:number=0;
  @Input() hindi:number=0;
  @Input() english:number=0;

  selectedValue:string='All';

  @Output()
  changedValue:EventEmitter<string> = new EventEmitter<string>();

  onSelected(){
    this.changedValue.emit(this.selectedValue);
  }
}
