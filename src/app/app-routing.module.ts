import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { SearchPlayersComponent } from './search-players/search-players.component';
import { BattingLeaderboardComponent } from './batting-leaderboard/batting-leaderboard.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
    { path: 'player-detail/:id', component: PlayerDetailComponent },
    { path: 'player-search', component: SearchPlayersComponent},
    { path: 'home-page', component: HomePageComponent},
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
    { path: 'batting-leaderboard', component: BattingLeaderboardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
