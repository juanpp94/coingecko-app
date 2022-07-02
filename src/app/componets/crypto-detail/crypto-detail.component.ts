import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoModel } from 'src/app/models/crypto';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.scss']
})
export class CryptoDetailComponent implements OnInit {
  crypto: CryptoModel = {
    id: '',
    name: '',
    price: 0,
    rank: 0,
    score: 0,
    description: '',
    img: '',
    coinLink1: '',
    coinLink2: '',
    coinPlatform: ''
  }
  constructor(private _route: ActivatedRoute, private _cryptoService: CryptoService) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.loadCryptoData(`${id}`);

  }

  loadCryptoData(id:string):void {
    
    this._cryptoService.getCryptoData$(id).subscribe( (response) => {
      console.log("esto obtuve de la API:",response);
      this.crypto.id = id;
      console.log("id:",this.crypto.id);
      this.crypto.name = response['name'];
      console.log("name:",this.crypto.name)
      this.crypto.price = response['market_data']['current_price']['usd'];
      console.log("price:",this.crypto.price)
      this.crypto.rank = response['coingecko_rank'];
      this.crypto.score = response['coingecko_score'];
      this.crypto.description = response['description']['en'];
      this.crypto.img = response['image']['small'];
      this.crypto.coinLink1 = response['links']['homepage'];
      this.crypto.coinLink2 = response['links']['blockchain_site'];
      this.crypto.coinPlatform = response['platforms'][''];
      console.log("platform:",this.crypto.coinPlatform);

    
    }, err => {
      alert("ERRROR")
      //console.log("Error de conexión")
    })
  }

}
