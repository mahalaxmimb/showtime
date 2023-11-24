import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieapi:MovieApiService) { }
movieData:any
trendingData:any
actionData:any
adventureData:any
animationData:any
comedyData:any
documentaryData:any
scienceFictionData:any
thrillerData:any
  ngOnInit(): void {
    this.movieapi.bannerApiData().subscribe(d=>{
      this.movieData = d.results
    })

    this.movieapi.trendingData().subscribe(d=>{
      this.trendingData = d.results
    })

    this.movieapi.getActionMovies().subscribe(d=>{
      this.actionData = d.results
    })

    this.movieapi.getAdventureMovies().subscribe(d=>{
      this.adventureData = d.results
    })

    this.movieapi.getAnimationMovies().subscribe(d=>{
      this.animationData = d.results
    })

    this.movieapi.getComedyMovies().subscribe(d=>{
      this.comedyData = d.results
    })

    this.movieapi.getdocumentaryMovies().subscribe(d=>{
      this.documentaryData = d.results
    })

    this.movieapi.getscienceFictionMovies().subscribe(d=>{
      this.scienceFictionData = d.results
    })

    this.movieapi.getTrillerMovies().subscribe(d=>{
      this.thrillerData = d.results
    })
  }

}
