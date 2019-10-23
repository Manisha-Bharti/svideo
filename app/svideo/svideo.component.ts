import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { showData } from './showData';

@Component({
    moduleId: module.id,
    templateUrl: 'svideo.component.html',
    styleUrls: ['svideo.component.css']
})

export class SVideoComponent implements OnInit {

                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    data: any[] = [];
    searchKey:string
 
    constructor(private router: Router){
    }

    ngOnInit(){
        this.searchKey = "";
        this.data = showData.shows;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   


    getImageString(poster: string){
        return "../../app/svideo/img/posters/" + poster;
    }

    /*
    Currently I have done this basic implementation which fires call for each keyUp event.
    This can definitely be refactored to apply debouncing for better performance.
    */
    filterShows(){
        this.data = showData.shows;
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