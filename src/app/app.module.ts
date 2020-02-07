import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { LabelValueComponent } from './label-value/label-value.component';
import {
    MatInputModule, MatPaginatorModule,
    MatSortModule, MatTableModule, MatToolbarModule,
    MatButtonModule, MatMenuModule, MatTabsModule, MatFormFieldModule,
    MatListModule, MatOptionModule, MatSelectModule, MatAutocompleteModule, 
    MatProgressSpinnerModule, MatGridListModule, MatExpansionModule, MatIconModule, MatTooltipModule, MatSidenavModule
} from '@angular/material';
import { BioInfoComponent } from './bio-info/bio-info.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SearchPlayersComponent } from './search-players/search-players.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlayerSearchFormComponent } from './player-search-form/player-search-form.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { BattingLeaderboardComponent } from './batting-leaderboard/batting-leaderboard.component';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { TeamStandingsComponent } from './team-standings/team-standings.component';
import { YearSelectComponent } from './year-select/year-select.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamListElementComponent } from './team-list-element/team-list-element.component';
import { PitchingLeaderboardComponent } from './pitching-leaderboard/pitching-leaderboard.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { TeamRosterViewComponent } from './team-roster-view/team-roster-view.component';
import { BaseballLiteratureComponent } from './baseball-literature/baseball-literature.component';
import { PlayerSidenavComponent } from './player-sidenav/player-sidenav.component';

@NgModule({
    declarations: [
        AppComponent,
        PlayerDetailComponent,
        LabelValueComponent,
        BioInfoComponent,
        DataTableComponent,
        TopMenuComponent,
        SearchPlayersComponent,
        PlayerSearchFormComponent,
        PlayerListComponent,
        BattingLeaderboardComponent,
        PlayerSearchComponent,
        HomePageComponent,
        TeamStatsComponent,
        TeamStandingsComponent,
        YearSelectComponent,
        TeamDetailComponent,
        TeamListComponent,
        TeamListElementComponent,
        PitchingLeaderboardComponent,
        BottomBarComponent,
        TeamRosterViewComponent,
        BaseballLiteratureComponent,
        PlayerSidenavComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatTabsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatListModule,
        MatOptionModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        MatExpansionModule,
        MatIconModule,
        MatTooltipModule,
        MatSidenavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
