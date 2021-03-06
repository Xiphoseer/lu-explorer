import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuJsonService } from '../../services';

const mapHScale = 128;
const mapVScale = 128;

@Component({
  selector: 'app-luz-file',
  templateUrl: './luz-file.component.html',
  styleUrls: ['./luz-file.component.css']
})
export class LuzFileComponent implements OnInit {

  _path: string;
  selected_path: any;
  selected_path_point: number;
  zone: any;
  zone_id: any;
  @Input('zone-ref') zoneRef: any;

  constructor(private route: ActivatedRoute, private luJsonService: LuJsonService) { }

  @Input() set path(value: string) {
    this.getZone(value);
  }

  ngOnInit() {
    this.zone_id = this.route.snapshot.params['id'];
  }

  getZone(path: string): void
  {
  	this.luJsonService.getJsonResource("maps/", path, "map")
      .subscribe(zone => this.zone = zone);
  }

  selectPath(path: any)
  {
    this.selected_path = path;
    this.selected_path_point = undefined;
  }

  selectPathPoint(point: number)
  {
    this.selected_path_point = point;
  }

  toPolygon(selected_path: any) {
    var points = selected_path.waypoints;
    let type = selected_path.type;

    switch (type) {
      case 0:
      case 1:
      case 3:
      case 4:
      case 6:
      case 7:
        points = points.map(data => data.pos);
        break;
      case 2:
      default:
        break;
    }
    return points.map(pos => pos.x + ',' + (-pos.z)).join(' ');
  }

  toViewBox(zone) {
    return `0 0 ${zone.widthInChunks * mapHScale} ${zone.heightInChunks * mapVScale}`;
  }

  toTranslate(zone) {
    return `translate(${zone.widthInChunks * mapHScale / 2} ${zone.heightInChunks * mapVScale / 2})`;
  }

}
