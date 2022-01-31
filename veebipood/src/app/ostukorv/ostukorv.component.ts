import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  // toodeNimi = "Coca cola";
  // toodeHind = 1;
  // toodeAktiivne = false;

  // toodeNimi2 = "Fanta";
  // toodeHind2 = 1.5;
  // toodeAktiivne2 = true;

  // toode1 = {nimi: "Coca cola", hind: 1, aktiivne: false};

  tooted: any [] = [];

    ostukorviSumma = 0;

  constructor() {
    console.log("constructor käivitub");
    this.arvutaOstukorviSumma();
   }

  ngOnInit(): void {
    console.log("Mindi ostukorvcomponenti lehele");
    const ostukorviTooted = sessionStorage.getItem("ostukorv");

    if (ostukorviTooted) {
      this.tooted = JSON.parse(ostukorviTooted);
    }
    this.arvutaOstukorviSumma();
  }

  onTyhjendaOstukorv () {
    this.tooted = [];
    sessionStorage.setItem("ostukorv", JSON.stringify(this.tooted));
    this.arvutaOstukorviSumma();
  }

  onEemaldaOstukorvist(toode: any) {
    console.log("Eemaldatud ostukorvist");
    console.log(toode);
    const j2rjekorraNumber = this.tooted.indexOf(toode);
    console.log(j2rjekorraNumber);
    console.log(this.tooted);
    this.tooted.splice(j2rjekorraNumber, 1);
    console.log(this.tooted);
    sessionStorage.setItem("ostukorv", JSON.stringify(this.tooted));
    this.arvutaOstukorviSumma();
  }
  onLisaOstukorvi(toode: any) {

    this.tooted.push(toode);
    sessionStorage.setItem("ostukorv", JSON.stringify(this.tooted));
    this.arvutaOstukorviSumma();
  }

  private arvutaOstukorviSumma() {
    this.tooted.forEach(element => this.ostukorviSumma = this.ostukorviSumma + element.hind );
    console.log(this.ostukorviSumma);
  }


}
