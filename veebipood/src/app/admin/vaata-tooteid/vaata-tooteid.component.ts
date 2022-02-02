import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaata-tooteid',
  templateUrl: './vaata-tooteid.component.html',
  styleUrls: ['./vaata-tooteid.component.css']
})
export class VaataTooteidComponent implements OnInit {

  tooted = [
    {nimi: 'Coca cola', hind: 1, aktiivne: true}, 
    {nimi: 'Fanta', hind: 1, aktiivne: true}, 
    {nimi: 'Sprite', hind: 1.5, aktiivne: true}, 
    {nimi: 'Vichy', hind: 1.7, aktiivne: false},
    {nimi: 'Vitamine well', hind: 2.2, aktiivne: true}
    ];


  constructor() { }

  ngOnInit(): void {
  }

  onKustutaToode(kustutatavToode: any) {
    const j2rjekorraNumber = this.tooted.indexOf(kustutatavToode);
    this.tooted.splice(j2rjekorraNumber, 1);
    localStorage.setItem("tooted", JSON.stringify(this.tooted));
  }

}
