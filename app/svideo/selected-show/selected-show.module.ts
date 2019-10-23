import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SelectedShowComponent } from './selected-show.component';
import { SVideoService } from '../svideo.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        SelectedShowComponent
    ],
    providers: [SVideoService]
})

export class SelectedShowModule { }