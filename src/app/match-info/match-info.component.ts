import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.scss']
})
export class MatchInfoComponent implements OnInit {

  constructor(private ar: ActivatedRoute) {
    ar.params.subscribe(param => console.log(param));
  }
  ngOnInit() {
  }

}
