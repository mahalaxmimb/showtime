import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieapi: MovieApiService, private route: ActivatedRoute) { }
  paramid: any
  moviedetails: any
  movieVideo:any
  moviecast:any
  ngOnInit(): void {
    this.paramid = this.route.snapshot.params['id']
    this.getMovie(this.paramid)
    this.getvideo(this.paramid)
    this.getcast(this.paramid)
  }

  getMovie(id: any) {
    this.movieapi.getMovieDetails(id).subscribe(md => {
      this.moviedetails = md
    })
  }

  getvideo(id:any){
    this.movieapi.getMovieVideo(id).subscribe(video=>{
      video.results.forEach((element:any) => {
        this.movieVideo = element.key
      });
    })
  }

  getcast(id:any){
    this.movieapi.getMovieCast(id).subscribe(cast=>{
      this.moviecast = cast.cast
    })
  }
}
