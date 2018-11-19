import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { Player } from 'src/app/interfaces/player';
@Component({
  selector: 'app-team-squad',
  templateUrl: './team-squad.component.html',
  styleUrls: ['./team-squad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamSquadComponent implements OnInit {
  @Input() squad: Player[];
  navItems: { title: string, isSelected: boolean }[] = [
    { 'title': 'Overview', 'isSelected': true },
    { 'title': 'Statistic', 'isSelected': false }
  ];
  constructor(private cdRef: ChangeDetectorRef) { }
  ngOnInit() {
  }
  onNavItemClick() {
    this.cdRef.detectChanges();
  }
}
