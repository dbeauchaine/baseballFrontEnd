import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { SearchPlayersComponent } from './search-players/search-players.component';
import { BattingLeaderboardComponent } from './batting-leaderboard/batting-leaderboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { TeamStandingsComponent } from './team-standings/team-standings.component';


const routes: Routes = [
    { path: 'player/:id', component: PlayerDetailComponent },
    { path: 'player-search', component: SearchPlayersComponent},
    { path: 'home-page', component: HomePageComponent},
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
    { path: 'batting-leaderboard', component: BattingLeaderboardComponent},
    { path: 'team', component: TeamStatsComponent},
    { path: 'standings', component: TeamStandingsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
