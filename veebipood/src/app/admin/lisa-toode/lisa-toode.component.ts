import { Component, OnInit } from '@angular/core';
import { VaataTooteidComponent } from '../vaata-tooteid/vaata-tooteid.component';



@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLisa (vorm: any) {
   
    if (vorm.valid) {
      const tootedLocalStoragest = localStorage.getItem("tooted");
      if (vorm.value.aktiivne === '') {
        vorm.value.aktiivne = false;
      }
      if (tootedLocalStoragest) {
        const tooted = JSON.parse(tootedLocalStoragest);
        tooted.push(vorm.value);
        localStorage.setItem("tooted", JSON.stringify(tooted));
      } else {
      localStorage.setItem("tooted", JSON.stringify([vorm.value]));
      }
    }
  }

}
