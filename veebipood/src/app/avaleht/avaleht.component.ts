import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {

  tooted = [
    {nimi: 'Coca cola', hind: 1, aktiivne: true}, 
    {nimi: 'Fanta', hind: 1, aktiivne: true}, 
    {nimi: 'Sprite', hind: 1.5, aktiivne: true}, 
    {nimi: 'Vichy', hind: 1.7, aktiivne: false},
    {nimi: 'Vitamine well', hind: 2.2, aktiivne: true}
    ];

  kahendV22rtus = true; //boolean
  kahendV22rtusKaks = false; //boolean

  //string
  s6nalineMuutuja = "jutumärkide sees mingi sõna või lause või täht";

  //number
  numbrilineMuutuja = 9512;

  constructor() {
    console.log("kui Component ehitatakse valmis siis pannakse esimene constructor käima")
    console.log("constructori sisse pannakse ühendusi erinevate failidega")
   }

  ngOnInit(): void {
    console.log("AvalehtComponent käima minemise funksioon");
    console.log("Käivitub kui kasutaja läheb komponendi peale");
    console.log("html käivitub, ngoninit aga vahetult enne");
    const tootedLocalStoragest = localStorage.getItem("tooted");
    if (tootedLocalStoragest) {
      this.tooted = JSON.parse(tootedLocalStoragest);
    }
  }

  onLisaOstukorvi(toode: any) {

    const sessionStorageOstukorv = sessionStorage.getItem("ostukorv");
    if (sessionStorageOstukorv) {
      console.log("On olemas blokk");
      const ostukorviTooted = JSON.parse(sessionStorageOstukorv);
      ostukorviTooted.push(toode);
      sessionStorage.setItem("ostukorv", JSON.stringify(ostukorviTooted));
    } else {
      console.log("ei ole olemas blokk");
      sessionStorage.setItem("ostukorv", JSON.stringify([toode]));
      
    }
    
  }

}
