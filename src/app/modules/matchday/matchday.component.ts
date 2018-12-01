import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../matches/services/matches.service';

@Component({
  selector: 'app-matchday',
  templateUrl: './matchday.component.html',
  styleUrls: ['./matchday.component.scss']
})
export class MatchdayComponent implements OnInit {

  currentTab = 0;
  isCalendarItemsVisible = false;
  days: string[];
  currentDay = 7;
  selectedDay: string;

  tabs: object[] = [
    { 'name': 'All', 'isSelected': true },
    { 'name': 'FINISHED', 'isSelected': false },
    { 'name': 'LIVE', 'isSelected': false },
    { 'name': 'SCHEDULED', 'isSelected': false }
  ];

  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    this.days = this.matchesService.getDays();
    this.selectedDay = this.days[this.currentDay];
  }

  onTabsItemClick(selectedTab) {
    this.tabs[this.currentTab]['isSelected'] = false;
    this.tabs[selectedTab]['isSelected'] = true;
    this.currentTab = selectedTab;
  }

  onCalendarClick() {
    this.isCalendarItemsVisible = !this.isCalendarItemsVisible;
  }
  onCalendarItemClick(index) {
    this.currentDay = index;
    this.selectedDay = this.days[index];
  }
  onMoveArrowClick(direction: string) {
    if (this.currentDay !== 0 && direction === 'left') {
      this.currentDay--;
    } else if (this.currentDay !== this.days.length - 1 && direction === 'right') {
      this.currentDay++;
    }
    this.selectedDay = this.days[this.currentDay];
  }
  // Pipes
  dayPipe(date: string): string {
    const week: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const year = date.slice(0, 4);
    const month: string = date.slice(5, 7);
    const day: string = date.slice(8, 10);
    const dayOfWeek: number = new Date(+year, +month - 1, +day).getDay();
    return `${month} / ${day}, ${week[dayOfWeek]}`;
  }
}
