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
    MatSortModule, MatTableModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatTabsModule
} from "@angular/material";
import { BioInfoComponent } from './bio-info/bio-info.component';
import { BattingTableComponent } from './batting-table/batting-table.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        PlayerDetailComponent,
        LabelValueComponent,
        BioInfoComponent,
        BattingTableComponent,
        TopMenuComponent,
    ],
    imports: [
        BrowserModule,
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
        MatTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
