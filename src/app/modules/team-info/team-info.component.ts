import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit {

  constructor(private ar: ActivatedRoute) {
    ar.params.subscribe(param => console.log(param));
  }

  ngOnInit() {
  }

}
