import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { SearchPlayersComponent } from './search-players/search-players.component';


const routes: Routes = [
    { path: 'player-detail/:id', component: PlayerDetailComponent },
    { path: 'player-search', component: SearchPlayersComponent},
    { path: '', redirectTo: '/player-search', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
