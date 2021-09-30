import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IsabelacurrencyComponent } from './isabelacurrency/isabelacurrency.component';
import { IsabelawalletComponent } from './isabelawallet/isabelawallet.component';

import { IsabelawalletService } from './isabelawallet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'wallet', component: IsabelawalletComponent },
      { path: 'bitcoins', component: IsabelacurrencyComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    IsabelacurrencyComponent,
    IsabelawalletComponent,
  ],
  bootstrap: [AppComponent],
  providers: [IsabelawalletService],
})
export class AppModule {}
