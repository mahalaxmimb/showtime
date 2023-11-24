import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movieapi:MovieApiService) { }
searchResult:any
  ngOnInit(): void {
  }
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  })

  submitForm(){
    console.log(this.searchForm.value, 'searchForm#')
    this.movieapi.getSearchMovie(this.searchForm.value).subscribe(d=>{
     console.log(d)
     this.searchResult= d.results
    })
  }
}
