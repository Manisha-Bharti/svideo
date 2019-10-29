import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { showData } from './showData';

@Injectable()
export class SVideoService {

    shows:showType[] = [];

    constructor(private http: HttpClient){
        this.shows = showData.shows.map((e)=>{
            return {title:e.title, 
                year: e.year, 
                description:e.description, 
                poster:e.poster,
                imdbID:e.imdbID, 
                trailer:e.trailer,
                rating: null
        };
    });
    }

    // getRating(data: string){
    //     let dataObj = this.shows.find((e) => {
    //         return data===e.imdbID;
    //     });

    //     if(dataObj.rating){
    //         return dataObj.rating;
    //     }

    //     return this.http.get('http://www.omdbapi.com/?i='+data+'&apikey=2a5db2ed').subscribe((res:any) => {
    //         dataObj.rating = res; 
    //     });
    // }

    getRatingv2(data: any){
        let dataObj = this.shows.find((e) => {
            return data===e.imdbID;
        });

        if(!dataObj.rating){
            this.http.get('http://www.omdbapi.com/?i='+data+'&apikey=2a5db2ed').subscribe((res:any) => {
                dataObj.rating = res; 
            });
        }
    }

        

    getData(){
        return this.shows;
    }

}

export class showType {
        "title": string;
        "year": string;
        "description": string;
        "poster": string;
        "imdbID": string;
        "trailer": string;
        "rating"?: string;

}