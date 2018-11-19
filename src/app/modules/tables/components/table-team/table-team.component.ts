import { Component, OnInit, Input } from '@angular/core';
import { TableElement } from 'src/app/interfaces/table-element';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-table-team',
  templateUrl: './table-team.component.html',
  styleUrls: ['./table-team.component.scss']
})
export class TableTeamComponent implements OnInit {
  @Input() index: number;
  @Input() tableElement: TableElement;
  @Input() teamId: number;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  getTeamIconPath(id): string {
    return this.imageService.getTeamIconPath(id);
  }
  getImageErrorHandler(target) {
    return this.imageService.getImageErrorHandler(target);
  }

}
