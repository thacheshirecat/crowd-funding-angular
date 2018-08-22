import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fund } from './../models/fund.model';
import { FundService } from '../services/fund.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css'],
  providers: [FundService]
})
export class FundListComponent implements OnInit
{
  funds: FirebaseListObservable<any[]>;

  constructor(private router: Router, private fundService: FundService) { }

  ngOnInit()
  {
    this.funds = this.fundService.getFunds();
  }

  goToFundPage(clickedFund)
  {
    this.router.navigate(['funds', clickedFund.$key])
  }

}
