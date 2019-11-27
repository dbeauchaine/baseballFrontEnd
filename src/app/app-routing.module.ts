import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailComponent } from './player-detail/player-detail.component';


const routes: Routes = [
    { path: 'player-detail/:id', component: PlayerDetailComponent },
    { path: '', redirectTo: 'player-detail/aardsda01', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
