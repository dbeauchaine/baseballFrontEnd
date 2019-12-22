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
    MatListModule, MatOptionModule, MatSelectModule
} from '@angular/material';
import { BioInfoComponent } from './bio-info/bio-info.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SearchPlayersComponent } from './search-players/search-players.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlayerSearchFormComponent } from './player-search-form/player-search-form.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { BattingLeaderboardComponent } from './batting-leaderboard/batting-leaderboard.component';
import { PlayerDetailTabComponent } from './player-detail-tab/player-detail-tab.component';

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
        PlayerDetailTabComponent,
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
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
