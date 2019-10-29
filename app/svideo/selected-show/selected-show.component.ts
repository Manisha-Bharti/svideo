import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { showData } from '../showData';
import { SVideoService } from '../svideo.service';

@Component({
    moduleId: module.id,
    templateUrl: 'selected-show.component.html',
    styleUrls: ['selected-show.component.css']
})

export class SelectedShowComponent implements OnInit {

    show : any;
    iFrameSrc: string;
    shows = showData.shows; 
    rating: string; 
    safeiFrameSrc: any;                                                                                                                                                                                                                                                                                                                                                                                                                                               
 
    constructor(private route: ActivatedRoute, private router: Router, private domSanitizer: DomSanitizer, private svideoService: SVideoService){ 
    }

    ngOnInit(){
        this.shows = this.svideoService.getData();
        this.route.paramMap.subscribe(params => {
            let arr  = this.shows.find((e) => {
                params.get('showId').replace("+"," ")
                return e.title === params.get('showId');});
            this.show = arr;
    });
    // this.getRating();
    this.svideoService.getRatingv2(this.show.imdbID);
    this.iFrameSrc = 'https://www.youtube.com/embed/' + this.show.trailer;
    this.safeiFrameSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(this.iFrameSrc)
    } 

    getImage(){
        return "../../../app/svideo/img/posters/" + this.show.poster;
    } 
    
    // getRating(){
    //     this.svideoService.getRating(this.show.imdbID).subscribe(
    //         (data:any) => {
    //             this.rating = data.imdbRating;
    //     });
    // }

    getTrailerLink(){
       let a = 'https://www.youtube-nocookie.com/embed/' + this.show.trailer;
       return a;
    }

    backToMainPage(){
        this.router.navigate(['/']);   
    }

}