import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { showData } from './showData';
import { SVideoService } from './svideo.service';

@Component({
    moduleId: module.id,
    templateUrl: 'svideo.component.html',
    styleUrls: ['svideo.component.css']
})

export class SVideoComponent implements OnInit {

                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    data: any[] = [];
    searchKey:string
 
    constructor(private router: Router, private svideoService: SVideoService){
    }

    ngOnInit(){
        this.searchKey = "";
        this.data = this.svideoService.getData();
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

    getImageString(poster: string){
        return "../../app/svideo/img/posters/" + poster;
    }

    /*
    Currently I have done this basic implementation which fires call for each keyUp event.
    This can definitely be refactored to apply debouncing for better performance.
    */
    filterShows(){
        this.data = this.svideoService.getData();
        let trimmedSearchKey = this.searchKey.trim().toLowerCase();
        if(trimmedSearchKey && trimmedSearchKey!== "")                                                                      {
            let filteredShows = this.data.filter((e)=>{
                let title = e.title.toLowerCase();
                return (title.indexOf(trimmedSearchKey)!==-1);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            });
            this.data = filteredShows;
        }
    }

    onCardSelect(id: string){
        id.replace(" ","+")
        this.router.navigate(['/svideo',id]);
    }

}