import { Injectable } from '@angular/core';
import { Standings } from 'src/app/interfaces/standings';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  groupSquad(squad) {
    const tempObj: any = {
      players: [],
      staff: []
    };
    const tempArray: any = [
      { 'position': 'Goalkeeper', 'players': [] },
      { 'position': 'Defender', 'players': [] },
      { 'position': 'Midfielder', 'players': [] },
      { 'position': 'Attacker', 'players': [] }
    ];
    squad.forEach(item => {
      if (item.role === 'PLAYER') {
        tempObj.players.push(item);
      } else {
        tempObj.staff.push(item);
      }
    });
    tempArray.forEach(item => {
      item.players = tempObj.players.filter(player => player.position === item.position);
      item.position += 's';
    });
    tempArray.push({ 'position': 'Other', 'players': tempObj.players.filter(player => player.position === null) });
    tempArray.push({ 'position': 'Staff', 'players': tempObj.staff });
    return tempArray;
  }

  getPlayerAge(dateOfBirth: string): number {
    const timezoneOffset: number = new Date().getTimezoneOffset() * 60000;
    const currentDate = new Date(Date.now() + timezoneOffset);
    const startDate = new Date(dateOfBirth);

    return currentDate.getFullYear() - startDate.getFullYear();
  }

  textPipe(text: string): string {
    return text.match(/[A-Za-z]+/g).join(' ').toLowerCase();
  }

  getTeamGroupStandings(standingsArr: Standings[], teamId): Standings[] {
    return standingsArr.filter(standings => standings.table.some(tableElement => tableElement.team.id === teamId));
  }
}
