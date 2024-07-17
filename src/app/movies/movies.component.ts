import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { FilterComponent } from '../filter/filter.component';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule,FormsModule,FilterComponent,SearchComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies=[
    {id:1,name:'Arjun Reddy',hero:'Vijay',duration:'3hrs',language:'Telugu',ratings:4.5,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhz9Jj3wNuK91A8ncCymQKOqMiN2X34TSWw&s'},
    {id:2,name:'Sita Ramam',hero:'Dulquer Salman',duration:'2.5hrs',language:'Telugu',ratings:4.5,image:'https://upload.wikimedia.org/wikipedia/en/1/1d/Sita_Ramam.jpg'},
    {id:3,name:'MahaNati',hero:'Dulquer Salmaan',duration:'2.6hrs',language:'Telugu',ratings:4.5,image:'https://upload.wikimedia.org/wikipedia/en/1/1d/Mahanati_poster.jpg'},
    {id:4,name:'Rangasthalam',hero:'RamCharan',duration:'3.1hrs',language:'Telugu',ratings:3.5,image:'https://upload.wikimedia.org/wikipedia/en/5/5d/Rangasthalam.jpg'},
    {id:5,name:'Interstellar ',hero:'Matthew McConaughey',duration:'4hrs',language:'English',ratings:4.5,image:'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'},
    {id:6,name:'Into the Wild',hero:'Emile Hirsch',duration:'3hrs',language:'English',ratings:4.8,image:'https://upload.wikimedia.org/wikipedia/en/d/dc/Into_the_Wild_%282007_film_poster%29.png'},
    {id:7,name:'Dune',hero:'Timothée Chalame',duration:'3.2hrs',language:'English',ratings:4.5,image:'https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg'},
    {id:8,name:'Shershaah',hero:'Sidharth Malhotra',duration:'2.8hrs',language:'Hindi',ratings:4.9,image:'https://upload.wikimedia.org/wikipedia/en/9/91/Shershaah_film_poster.jpg'},
    {id:9,name:'Rang De Basanti',hero:'	Aamir Khan',duration:'3hrs',language:'Hindi',ratings:4.2,image:'https://upload.wikimedia.org/wikipedia/en/0/08/Rang_De_Basanti_poster.jpg'},
    {id:10,name:'12th Fail',hero:'Vikrant Massey',duration:'2.6hrs',language:'Hindi',ratings:4.7,image:'https://upload.wikimedia.org/wikipedia/en/f/f2/12th_Fail_poster.jpeg'},
  ]
  getTotal(){
    return this.movies.length;
  }
  getTelugu(){
    return this.movies.filter(movie=>movie.language==='Telugu').length;
  }
  getEnglish(){
    return this.movies.filter(movie=>movie.language==='English').length;
  }
  getHindi(){
    return this.movies.filter(movie=>movie.language==='Hindi').length;
  }

  movieCount:string='All';
  searchText:string='';

  onChanged(data:string){
    this.movieCount=data;
  }

  onEntered(searchVal:string){
    this.searchText=searchVal;
  }
}
