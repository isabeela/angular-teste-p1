import { IsabelawalletService } from '../isabelawallet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isabelacurrency',
  templateUrl: './isabelacurrency.component.html',
  styleUrls: ['./isabelacurrency.component.css'],
})
export class IsabelacurrencyComponent implements OnInit {
  constructor(public walletService: IsabelawalletService) {}

  ngOnInit() {}

  updateBitCoinRates() {
    this.walletService.update();
  }
}
