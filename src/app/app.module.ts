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
    MatProgressSpinnerModule, MatGridListModule, MatExpansionModule, MatIconModule, MatTooltipModule
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
import { BasicBattingTableComponent } from './basic-batting-table/basic-batting-table.component';
import { AdvancedBattingTableComponent } from './advanced-batting-table/advanced-batting-table.component';
import { BasicPitchingTableComponent } from './basic-pitching-table/basic-pitching-table.component';
import { BasicFieldingTableComponent } from './basic-fielding-table/basic-fielding-table.component';
import { YearSelectComponent } from './year-select/year-select.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

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
        BasicBattingTableComponent,
        AdvancedBattingTableComponent,
        BasicPitchingTableComponent,
        BasicFieldingTableComponent,
        YearSelectComponent,
        TeamDetailComponent,
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
        MatTooltipModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
