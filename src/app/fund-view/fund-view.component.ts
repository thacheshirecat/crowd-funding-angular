import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Fund } from '../models/fund.model';
import { FundService } from '../services/fund.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-fund-view',
  templateUrl: './fund-view.component.html',
  styleUrls: ['./fund-view.component.css'],
  providers: [FundService]
})
export class FundViewComponent implements OnInit
{
  fundId: string;
  fundToDisplay;

  constructor
  (
    private route: ActivatedRoute,
    private location: Location,
    private fundService: FundService
  ) {}

  ngOnInit()
  {
    this.route.params.forEach((urlParameters) => {
      this.fundId = urlParameters['id'];
    })
    this.fundToDisplay = this.fundService.getFundById(this.fundId);
  }
}
