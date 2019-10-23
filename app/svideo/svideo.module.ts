import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SVideoComponent } from './svideo.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        SVideoComponent
    ],
    providers: []
})

export class SVideoModule { }