import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityRewardsPod, DB_Activities } from '../../cdclient';

import { LuLocaleService, LuJsonService } from '../../services';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  activity_id: number = -1;
  activity_loc: any;
  activity_rewards?: ActivityRewardsPod;
  activity: DB_Activities;

  constructor(
    private luJsonService: LuJsonService,
    private luLocaleService: LuLocaleService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(this.processRouteChange.bind(this))
  }

  processRouteChange(map: any) {
    this.activity_id = map.get('id');
    this.luLocaleService
      .getLocaleEntry('Activities', this.activity_id)
      .subscribe(entry => this.activity_loc = entry);
    this.luJsonService
      .getGeneric<DB_Activities>(this.activity_id, 'Activities', true)
      .subscribe(entry => this.activity = entry);
    this.luJsonService
      .getActivityRewards(this.activity_id)
      .subscribe(entry => this.activity_rewards = entry);
  }

}
