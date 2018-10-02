import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { PappsPage } from '../papps/papps';
import { ComPage } from '../com/com';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  dibujo = DibujoPage;
  papps = PappsPage;
  com = ComPage;

  constructor(public navCtrl: NavController) {

  }
  clickHistoria(){
    this.navCtrl.push(this.historia);
  }

  clickDibujo(){
    this.navCtrl.push(this.dibujo);
  }

  clickPapps(){
    this.navCtrl.push(this.papps);
  }

  clickCom(){
    this.navCtrl.push(this.com);
  }
}
