import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoDetailComponent } from './componets/crypto-detail/crypto-detail.component';
import { CryptoListComponent } from './componets/crypto-list/crypto-list.component';
import { HomeComponent } from './componets/home/home.component';

const routes: Routes = [
 
  {
    path: 'cryptos', 
    component: CryptoListComponent
  },
  {
    path: 'cryptos/:id', 
    component: CryptoDetailComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**', redirectTo: ''
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
