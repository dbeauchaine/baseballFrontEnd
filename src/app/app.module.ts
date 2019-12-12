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
    MatSortModule, MatTableModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatTabsModule, MatFormFieldModule, MatListModule
} from "@angular/material";
import { BioInfoComponent } from './bio-info/bio-info.component';
import { BattingTableComponent } from './batting-table/batting-table.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FieldingTableComponent } from './fielding-table/fielding-table.component';
import { SearchPlayersComponent } from './search-players/search-players.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlayerSearchFormComponent } from './player-search-form/player-search-form.component';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
    declarations: [
        AppComponent,
        PlayerDetailComponent,
        LabelValueComponent,
        BioInfoComponent,
        BattingTableComponent,
        TopMenuComponent,
        FieldingTableComponent,
        SearchPlayersComponent,
        PlayerSearchFormComponent,
        PlayerListComponent,
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
        MatListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
