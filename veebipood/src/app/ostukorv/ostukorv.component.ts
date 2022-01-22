import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  toodeNimi = "Coca cola";
  toodeHind = 1;
  toodeAktiivne = false;

  toodeNimi2 = "Fanta";
  toodeHind2 = 1.5;
  toodeAktiivne2 = true;

  constructor() {
    console.log("constructor käivitub");
   }

  ngOnInit(): void {
    console.log("Mindi ostukorvcomponenti lehele");
  }

  onEemaldaOstukorvist() {
    console.log("Eemaldatud ostukorvist");
  }

}
