import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
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
  }

  onLisaOstukorvi() {
    console.log("ostukorvi lisamise funktsionaalsus töötab!")
    this.kahendV22rtus = !this.kahendV22rtus;
    this.kahendV22rtusKaks = !this.kahendV22rtusKaks;
  }

}
