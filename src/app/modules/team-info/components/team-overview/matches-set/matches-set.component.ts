import { Component, Input, ChangeDetectionStrategy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Match } from 'src/app/interfaces/match';
import { Subscription } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-matches-set',
  templateUrl: './matches-set.component.html',
  styleUrls: ['./matches-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchesSetComponent implements OnChanges {

  @Input() teamId: number;

  matches: Match[];
  isDataLoading: boolean;

  constructor(private httpService: HttpService,
    private cdRef: ChangeDetectorRef) { }

  ngOnChanges() {
    this.isDataLoading = true;
    const subscrpition: Subscription = this.httpService.getMatchesByPeriod(this.teamId, this.getDatePeriod())
      .subscribe({
        next: res => this.matches = res,
        error: console.error,
        complete: () => {
          subscrpition.unsubscribe();
          this.isDataLoading = false;
          this.cdRef.detectChanges();
        }
      });
  }

  getDatePeriod(): string[] {
    const timezoneOffset: number = new Date().getTimezoneOffset() * 60000;
    const date: Date = new Date(Date.now() + timezoneOffset);
    const month: number = date.getMonth();
    const dateFrom = new Date(date.setMonth(month - 1) - timezoneOffset);
    const dateTo = new Date(date.setMonth(month + 1) - timezoneOffset);

    return [formatDate(dateFrom, 'yyyy-MM-dd', 'en'), formatDate(dateTo, 'yyyy-MM-dd', 'en')];
  }
}
