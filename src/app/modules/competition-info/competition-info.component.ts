import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competition-info',
  templateUrl: './competition-info.component.html',
  styleUrls: ['./competition-info.component.scss']
})
export class CompetitionInfoComponent implements OnInit {

  id: number;

  constructor(private ar: ActivatedRoute) {
    ar.params.subscribe(param => {
      console.log(param);
      this.id = param.id;
    });
  }

  ngOnInit() {
  }

}
