import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { SVideoModule} from './svideo/svideo.module';
import { SelectedShowModule} from './svideo/selected-show/selected-show.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        SVideoModule,
        SelectedShowModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }