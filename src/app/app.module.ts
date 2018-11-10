import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatchesModule } from './matches/matches.module';
import { SvgLibraryComponent } from './shares/svg-library/svg-library';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeagueSetComponent } from './league-set/league-set.component';
import { GoUpBtnComponent } from './go-up-btn/go-up-btn.component';
import { MatchInfoModule } from './match-info/match-info.module';
import { TeamInfoModule } from './team-info/team-info.module';

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
