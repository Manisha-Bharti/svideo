import { Routes, RouterModule } from '@angular/router';

import { SVideoComponent } from './svideo/svideo.component';
import { SelectedShowComponent } from './svideo/selected-show/selected-show.component';

const appRoutes: Routes = [
    { path: '', component: SVideoComponent },
    { path: 'svideo/:showId', component: SelectedShowComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);