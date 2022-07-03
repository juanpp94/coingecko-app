import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { CryptoModel } from 'src/app/models/crypto';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {
  allCryptos: Array<CryptoModel> = [];
 
  constructor(private _cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData():void {
    
    this._cryptoService.getAllData$().subscribe( (response: CryptoModel[]) => {
      console.log("esto obtuve de la API:",response)
      this.allCryptos = response;
      console.log("Todas las criptos:",this.allCryptos)
      console.log("Esto esta en la posicion cero: ",this.allCryptos[0])
    }, err => {
      alert("Connection error");
    })
  }

}
