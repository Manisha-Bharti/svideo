import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { showData } from './showData';

@Injectable()
export class SVideoService {

    constructor(private http: HttpClient){
    }

    getRating(data: string){
        return this.http.get('http://www.omdbapi.com/?i='+data+'&apikey=2a5db2ed');
    }

    getData(){
        return showData.shows;
    }

}