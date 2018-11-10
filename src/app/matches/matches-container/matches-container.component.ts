import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-matches-container',
  templateUrl: './matches-container.component.html',
  styleUrls: ['./matches-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchesContainerComponent implements OnChanges {

  @Input() tabs: object[];
  @Input() currentTab: number;
  @Input() selectedDay: string;

  currentDay: string;
  matches: any = [];
  matchesCount: object;
  isDataLoading: boolean;

  constructor(private matchesService: MatchesService,
    private cdRef: ChangeDetectorRef) { }

  ngOnChanges() {
    if (this.currentDay !== this.selectedDay) {
      this.isDataLoading = true;
      const subscribtion = this.matchesService.getAllMatches(this.selectedDay).subscribe({
        next: (res) => {
          this.matches = res;
          this.getMatchesCount(res);
          this.isDataLoading = false;
          setTimeout(() => {
            this.cdRef.detectChanges();
          }, 500);
        },
        error: console.error,
        complete: () => subscribtion.unsubscribe()
      });
      this.currentDay = this.selectedDay;
    }
  }

  getMatchesCount(matches) {
    this.matchesCount = {
      'FINISHED': 0,
      'LIVE': 0,
      'SCHEDULED': 0
    };
    matches.forEach(item => {
      item.forEach(match => {
        this.matchesCount[match.commonStatus]++;
      });
    });
  }
  isEmptyGroup(group) {
    return group.some(item => item['commonStatus'] === this.tabs[this.currentTab]['name']);
  }
  isEmptyTab() {
    if (this.currentTab === 0 && !this.matches.length) {
      return true;
    } else if (this.currentTab !== 0 && !this.matchesCount[this.tabs[this.currentTab]['name']]) {
      return true;
    } else {
      return false;
    }
  }
  getVisibilityByTab(status) {
    return status === this.tabs[this.currentTab]['name'];
  }
}
