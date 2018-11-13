import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatchesModule } from './modules/matches/matches.module';
import { SvgLibraryComponent } from './shares/svg-library/svg-library';
import { HeaderComponent } from './modules/ui-components/header/header.component';
import { FooterComponent } from './modules/ui-components/footer/footer.component';
import { LeagueSetComponent } from './modules/ui-components/league-set/league-set.component';
import { GoUpBtnComponent } from './modules/ui-components/go-up-btn/go-up-btn.component';
import { MatchInfoModule } from './modules/match-info/match-info.module';
import { TeamInfoModule } from './modules/team-info/team-info.module';

@NgModule({
  declarations: [
    AppComponent,
    SvgLibraryComponent,
    HeaderComponent,
    FooterComponent,
    LeagueSetComponent,
    GoUpBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatchesModule,
    MatchInfoModule,
    TeamInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
