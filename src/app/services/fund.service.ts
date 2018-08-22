import { Injectable } from '@angular/core';
import { Fund } from './../models/fund.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FundService
{
  funds: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase)
  {
    this.funds = database.list('funds');
  }

  getFunds()
  {
    return this.funds;
  }
  getFundById(fundId: string)
  {
    return this.database.object('funds/' + fundId)
  }
  addFund(newFund: Fund)
  {
    this.funds.push(newFund);
  }
}
